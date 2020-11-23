<?php

namespace Fusion\Observers;

use Fusion\Models\Matrix;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Spatie\Activitylog\Models\Activity;

class MatrixObserver
{
    /**
     * Handle the matrix "created" event.
     *
     * @param \Fusion\Models\Matrix $matrix
     *
     * @return void
     */
    public function created(Matrix $matrix)
    {
        Schema::create($matrix->getBuilderTable(), function (Blueprint $table) use ($matrix) {
            if ($matrix->type === 'collection') {
                $table->bigIncrements('id');
            }

            $table->unsignedBigInteger('matrix_id');
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('name')->nullable();
            $table->string('slug')->unique()->nullable();
            $table->boolean('status')->default(true);
            $table->timestamp('publish_at')->useCurrent();
            $table->timestamp('expire_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Handle the matrix "updating" event.
     *
     * @param \Fusion\Models\Matrix $matrix
     *
     * @return void
     */
    public function updating(Matrix $matrix)
    {
        // Fetch our "old" matrix instance
        $old = Matrix::find($matrix->id);

        // Rename the tables if changed
        if ($old->getBuilderTable() !== $matrix->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $matrix->getBuilderTable());

            $oldClass = 'Fusion\\Models\\Collections\\'.Str::studly($old->handle);
            $newClass = 'Fusion\\Models\\Collections\\'.Str::studly($matrix->handle);

            // Update model classes in the activity log to match the new class name
            Activity::where('subject_type', $oldClass)
                ->update([
                    'subject_type' => $newClass,
                    'properties'   => DB::raw("REPLACE(properties, '".$old->slug."', '".$matrix->slug."')"),
                ]);
        }

        // Create the ID column if converting from a single to a collection type
        if ($old->type === 'single' and $matrix->type === 'collection') {
            Schema::table($matrix->getBuilderTable(), function (Blueprint $table) {
                $table->bigIncrements('id')->first();
            });
        }

        // Drop the ID column if converting from a collection to a single type
        if ($old->type === 'collection' and $matrix->type === 'single') {
            Schema::table($matrix->getBuilderTable(), function (Blueprint $table) {
                $table->dropColumn('id');
            });
        }
    }

    /**
     * Handle the matrix "deleted" event.
     *
     * @param \Fusion\Models\Matrix $matrix
     *
     * @return void
     */
    public function deleted(Matrix $matrix)
    {
        Schema::dropIfExists($matrix->getBuilderTable());
    }
}

<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\SingleRequest;
use Fusion\Http\Resources\SingleResource;
use Fusion\Models\Matrix;
use Fusion\Services\Builders;

class SingleController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param string $matrix
     *
     * @return JsonResponse
     */
    public function show($matrix)
    {
        $this->authorize('entries.show');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $single = Builders\Matrix::resolve($matrix->handle);

        return new SingleResource($single->withoutGlobalScopes()->firstOrCreate(
            [
                'matrix_id' => $matrix->id,
            ],
            [
                'name'      => $matrix->name,
                'slug'      => $matrix->slug,
                'status'    => true,
            ]
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\SingleRequest $request
     * @param int                                 $id
     *
     * @return \Fusion\Http\Resources\SingleResource
     */
    public function update(SingleRequest $request, $id)
    {
        $single = $request->model->withoutGlobalScopes()->updateOrCreate([
            'matrix_id' => $id,
        ], $request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($single, $relationship);
        }

        return new SingleResource($single);
    }
}

<?php

namespace Fusion\Services\Tasks\Backups;

use Fusion\Jobs\Backups\BackupRun;
use Illuminate\Console\Scheduling\Schedule;

class Run
{
    /**
     * Schedule Task.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     *
     * @return void
     */
    public function handle(Schedule $schedule)
    {
        $schedule
            ->job(new BackupRun())
            ->dailyAt('1:00')
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function () {
                return setting('backups.backups_auto', 'disabled') == 'enabled';
            });
    }
}

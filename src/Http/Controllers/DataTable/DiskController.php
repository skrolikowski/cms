<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Disk;

class DiskController extends DataTableController
{
    public function builder()
    {
        return Disk::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'driver',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'driver',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'driver',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'driver' => 'Driver',
        ];
    }
}

<?php

namespace Fusion\Http\Controllers\API\Menus;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Menu;
use Fusion\Services\Builders\Menu as Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NodeReorderController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $menu
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $menu)
    {
        $this->authorize('nodes.update');

        $menu = Menu::find($menu)->firstOrFail();
        $model = (new Builder($menu->handle))->make();
        $nodes = $request->nodes;

        foreach ($nodes as $id => $node) {
            $record = $model->find($id);
            $record->order = $node['order'];

            $record->save();
        }

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->id.'/nodes',
            ])
            ->log('Updated '.strtolower(Str::singular($menu->name)).' menu node ordering');
    }
}

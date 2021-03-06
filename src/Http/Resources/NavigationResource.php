<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NavigationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        $resource = [
            'id'          => $this->id,
            'name'        => $this->name,
            'handle'      => $this->handle,
            'description' => $this->description,

            'table'       => $this->getBuilderTable(),
            'blueprint'   => new BlueprintResource($this->blueprint),
            'links'       => LinkResource::collection($this->links),
        ];

        foreach ($this->blueprint->fields as $field) {
            $resource['fields'][$field->handle] = $this->{$field->handle};
        }

        return $resource;
    }
}

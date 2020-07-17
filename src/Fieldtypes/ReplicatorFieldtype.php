<?php

namespace Fusion\Fieldtypes;

class ReplicatorFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Replicator';

    /**
     * @var string
     */
    public $icon = 'magic';

    /**
     * @var string
     */
    public $description = 'A magical field.';

    /**
     * @var array
     */
    public $settings = [
        'taxonomy' => null
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.taxonomy' => 'required'
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.taxonomy' => 'taxonomy'
    ];

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\Replicator';
}

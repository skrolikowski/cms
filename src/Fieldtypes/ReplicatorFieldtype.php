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
        'replicator' => null
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.replicator' => 'required'
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.replicator' => 'replicator'
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

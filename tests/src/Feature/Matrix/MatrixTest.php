<?php

namespace Fusion\Tests\Feature\Matrix;

use Facades\MatrixFactory;
use Fusion\Models\Fieldset;
use Fusion\Models\Matrix;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;

class MatrixTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group auth
     */
    public function a_guest_cannot_not_create_a_matrix()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/matrices', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_matrix()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/matrices');
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_a_matrix()
    {
        $this->expectException(AuthorizationException::class);

        $matrix = factory(Matrix::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/matrices/'.$matrix->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group permissions
     */
    public function a_user_without_permissions_cannot_create_new_matrices()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/matrices', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_matrices()
    {
        $this->expectException(AuthorizationException::class);

        $matrix = factory(Matrix::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/matrices/'.$matrix->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_roles()
    {
        $this->expectException(AuthorizationException::class);

        $matrix = factory(Matrix::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/matrices/'.$matrix->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_matrix()
    {
        $this->actingAs($this->owner, 'api');

        $matrix = factory(Matrix::class)->make()->toArray();
        $fieldset = factory(Fieldset::class)->create();

        $matrix['fieldset'] = $fieldset->id;

        $this
            ->json('POST', '/api/matrices', $matrix)
            ->assertStatus(201);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_not_assign_a_matrix_as_a_parent_to_itself()
    {
        // If this test fails we'll sit here until the default 30 seconds execution
        // limit has passed due to an infinite loop being generated by assigning
        // the parent ID value to itself. Wonder if there's a better way to catch this?
        $this->actingAs($this->owner, 'api');

        $matrix = factory(Matrix::class)->create();

        $data = $matrix->toArray();
        $data['parent_id'] = $matrix->id;

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response->assertJsonValidationErrors(['parent_id']);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_an_existing_matrix()
    {
        $this->actingAs($this->owner, 'api');

        $matrix = MatrixFactory::create();
        $matrix->description = 'This is the new matrix description';

        $this
            ->json('PATCH', '/api/matrices/'.$matrix->id, $matrix->toArray())
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function matrix_name_labels_can_be_customized()
    {
        $this->actingAs($this->owner, 'api');

        $matrix = MatrixFactory::create();
        $matrix->name_label = 'Custom Title';

        $this
            ->json('PATCH', '/api/matrices/'.$matrix->id, $matrix->toArray())
            ->assertStatus(200);

        $this->assertDatabaseHas('matrices', [
            'id'         => $matrix->id,
            'name_label' => $matrix->name_label,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function autogenerated_matrix_titles_can_be_customized()
    {
        $this->actingAs($this->owner, 'api');

        $matrix = MatrixFactory::create();
        $matrix->show_name_field = false;
        $matrix->name_format = '{id}-{name}';

        $this
            ->json('PATCH', '/api/matrices/'.$matrix->id, $matrix->toArray())
            ->assertStatus(200);

        $this->assertDatabaseHas('matrices', [
            'id'              => $matrix->id,
            'show_name_field' => $matrix->show_name_field,
            'name_format'     => $matrix->name_format,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_matrix_can_autogenerate_titles_and_slugs()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->owner, 'api');

        $matrix = MatrixFactory::asCollection()->create();

        $data = $matrix->toArray();
        $data['show_name_field'] = false;
        $data['name_format'] = "{id} {created_at->format('Y')}";

        $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response = $this->json('POST', '/api/collections/'.$matrix->slug, [
            'status' => true,
        ]);

        $response->assertStatus(201);

        $id = $response->getData()->data->entry->id;
        $entry = matrix_entries($matrix->handle)->find($id);

        $name = $entry->id.' '.$entry->created_at->format('Y');
        $slug = Str::slug($name);

        $this->assertDatabaseHas($matrix->table, [
            'name' => $name,
            'slug' => $slug,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function each_matrices_must_have_a_unique_slug_and_handle()
    {
        $this->actingAs($this->owner, 'api');

        // mimic an insert w/ duplicate data..
        $matrix = factory(Matrix::class)->create();
        $matrix['id'] = null;

        $this
            ->json('POST', '/api/matrices', $matrix->toArray())
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug', 'handle']);
    }

    /**
     * @test
     * @group feature
     * @group validation
     * @group matrix
     */
    public function matrix_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->owner, 'api');

        $this
            ->json('POST', '/api/forms', ['handle' => 'default'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/forms', ['handle' => 'for'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/forms', ['handle' => 'true'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);
    }
}

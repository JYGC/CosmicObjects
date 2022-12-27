<!-- / -->
<style lang="scss">
    thead td {
        font-weight: bold;
    }
</style>

<script lang="ts">
    import type { CosmicObject } from '$lib/models';
    export let data: { objects: CosmicObject[] };
</script>

<h1>Cosmic Objects</h1>
<a href="/create">Create new object</a>
{#if data.objects !== undefined && data.objects.length > 0}
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Type</td>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {#each data.objects as {id, name, type}}
                <tr id="{id}">
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>
                        <a class="btn" href="/update/{id}">Update</a>
                    </td>
                    <td>
                        <a class="btn" href="/delete/{id}">Delete</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <h2>No cosmic objects in database</h2>
{/if}
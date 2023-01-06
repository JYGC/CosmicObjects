<!-- /create -->
<script lang="ts">
    import CosmicDetails from '$lib/cosmic/CosmicDetails.svelte';
</script>

<h1>Add cosmic object</h1>
<form method="POST">
    <CosmicDetails />
    <br />
    <a class="btn" href="/">Cancel</a>
    <button type="submit" class="btn">Create</button>
</form>
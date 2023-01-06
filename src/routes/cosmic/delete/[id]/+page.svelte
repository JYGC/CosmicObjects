<!-- /delete -->
<script lang="ts">
     import { page } from '$app/stores';
     const id = $page.params.id;
</script>

<h1>Delete cosmic object</h1>
<p><b>Are you sure you what to delete this object?</b></p>
<form method="POST">
    <input type="hidden" name="id" value="{id}" />
    <a class="btn" href="/cosmic">No</a>
    <button type="submit" class="btn">Yes</button>
</form>
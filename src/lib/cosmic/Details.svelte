<script lang="ts">
	import { newCosmic } from "$lib/cosmic/schemas";
	import type { Cosmic } from "$lib/cosmic/schemas";

    export let cosmic: Cosmic = newCosmic();
</script>

<label>
    Name<br />
    <input name="name" type="text" bind:value="{cosmic.name}" />
</label><br />
<label>
    Type<br />
    <input name="type" type="text" bind:value="{cosmic.type}" />
</label><br />
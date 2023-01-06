<script lang="ts">
	import type { Cosmic } from "$lib/schemas";

    export let cosmic: Cosmic = {
        id: "",
        name: "",
        type: ""
    };

    console.log(cosmic);
</script>

<label>
    Name<br />
    <input name="name" type="text" value="{cosmic.name}" />
</label><br />
<label>
    Type<br />
    <input name="type" type="text" value="{cosmic.type}" />
</label><br />
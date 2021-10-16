<svelte:head>
	<title>Tests | webclient-example</title>
</svelte:head>

<script context="module">

export async function load({fetch}) {
    const url = "/api/tests";
    const r = await fetch(url);
    const data = await r.json();
    console.log(data)

    return {
        props: {
            data
        }
    }
}

</script>

<script>

export let data;

let name;
let description;
//$: console.log(name, description);

async function handleSubmit() {
    const submit = await fetch("/api/tests", {
        method: "POST",
        body: JSON.stringify({
            name,
            description,
        })
    })
}

</script>

<main>

    <h1>Tests</h1>

    <h2>Add test items</h2>
    

    <form class="box" on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="Name" bind:value={name} />
        <input type="text" placeholder="Description" bind:value={description} />
        <input type="submit" />
    </form>

    <!--  {JSON.stringify(data)}  -->
    <h2>Test items list</h2>
    {#each data.data.data as test}
        <div class="box2">
            <span>Name: {test.name} </span><br>
            <span>Description: {test.description}</span>
        </div>
    {/each}

</main>

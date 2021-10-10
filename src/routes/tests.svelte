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
</script>

<main>

    <h1>Tests</h1>

    <form action="/api/tests" method="POST">
        <label for="">
            Name:
            <input type="text" name="name">
        </label>
        <label for="">
            Description:
            <input type="text" name="description">
        </label>
        <input type="submit">
    </form>

    {JSON.stringify(data)}

    {#each data.data.data as test}
        <p>{test.name} | {test.description}</p>
    {/each}

</main>

<style>
    label {
        display:block;
    }
</style>

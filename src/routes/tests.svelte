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

    <h2>Add test items</h2>
    <form class="box" action="/api/tests" method="POST">
        <input type="text" name="name" placeholder="Name">
        <input type="text" name="description" placeholder="Description">
        <input type="submit" value="Add new test item">
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

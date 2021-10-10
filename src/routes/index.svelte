<svelte:head>
	<title>Welcome to webclient-example</title>
</svelte:head>

<script context="module">
    export async function load({session}) {
        return {
            props: {
                user: session.user,
            },
        };
    }
</script>
<script>
    export let user;
</script>

<main>
    <h1>webclient-example</h1>
	<p>webclient-example is a svelte frontend for a go api with auth</p>
    <p>atm we use github oauth</p>
    {#if user}
    <h2>Welcome {user}</h2>
    {/if}
</main>

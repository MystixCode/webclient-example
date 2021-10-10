<svelte:head>
	<title>Profile | webclient-example</title>
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
    export let user
</script>

<main>

	<h1>Welcome {user}</h1>
	<p>TODO list some profile data here</p>

</main>

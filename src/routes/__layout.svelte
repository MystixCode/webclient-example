<!-- Global stuff goes here -->
<script context="module">
    //protect routes like this
    export async function load({ page, session }) {
      if (/^\/admin\/(.*)/.test(page.path) && session.user === null) {
        return { redirect: "/", status: 302 };
      }
      return {
        props: {
                user: session.user,
            },
      };
    }
</script>
  
<script>
	import Nav from '../components/Nav.svelte';
    export let user;
    //console.log(user)
</script>

<Nav user={user}/>

  <slot></slot>

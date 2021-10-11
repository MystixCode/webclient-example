
<script>
    export let user;

	let navOpen = false;

	function toggleBurger() {
	  var x = document.getElementById("links");
	  if (x.style.display === "block") {
		  navOpen = false;
		x.style.display = "none";
	  } else {
		  navOpen=true;
		x.style.display = "block";
	  }
	}

</script>

<div class="mainnav">

	<a id="logo" href="/">webclient-example</a>

	<div class="burger" class:change={navOpen} on:click="{toggleBurger}">
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
	</div>

	<div id="links">
	  <a href="/tests"><i class="fas fa-vial" style="margin-right:8px;"></i>Tests</a>
	  <a href="/about"><i class="fas fa-building" style="margin-right:8px;"></i>About</a>
      {#if user}
      <a href="/profile"><i class="fas fa-user" style="margin-right:8px;"></i>Profile</a>
	  <a href="/auth/logout"><i class="fas fa-user" style="margin-right:8px;"></i>Logout</a>
      {:else}
      <a href="/auth/login"><i class="fas fa-user" style="margin-right:8px;"></i>Login</a>
      {/if}
	</div>

</div>

<style>

	.mainnav {
	  overflow: hidden;
	  background-color: #303030;
	  position: relative;
	}

	#logo{
		background-color: #600080;
	}

	.mainnav #links {
	  display: none;
	}

	.mainnav a {
	  color: white;
	  padding: 14px 16px;
	  text-decoration: none;
	  font-size: 17px;
	  display: block;
	}

	.mainnav a:hover{
	  background-color: #424242;
	}

	.burger {
		cursor: pointer;
		display: block;
		position: absolute;
		right: 14px;
		top: 4px;
	}

	.bar1, .bar2, .bar3 {
	width: 35px;
	height: 5px;
	background-color: #FFFFFF;
	margin: 6px 0;
	transition: 0.4s;
	}

	.change .bar1 {
	-webkit-transform: rotate(-45deg) translate(-9px, 6px);
	transform: rotate(-45deg) translate(-9px, 6px);
	}

	.change .bar2 {opacity: 0;}

	.change .bar3 {
	-webkit-transform: rotate(45deg) translate(-8px, -8px);
	transform: rotate(45deg) translate(-8px, -8px);
	}

</style>

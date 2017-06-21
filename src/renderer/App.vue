<template>
	<div id="app" class="wrapper">
		<header class="main-header">
			<router-link to='/' class="logo">
				<span class="logo-mini">
					<i class="fa fa-shopping-basket"></i>
				</span>
				<span class="logo-lg">
					SUPERMART
				</span>
			</router-link>
			<nav class="navbar navbar-static-top">
				<a class="sidebar-toggle" data-toggle="offcanvas" role="button">
					<span class="sr-only">Toggle navigation</span>
				</a>
			</nav>
		</header>
		<aside class="main-sidebar">
			<section class="sidebar">
				<ul class="sidebar-menu">
					<li class="header">MAIN NAVIGATION</li>
					<router-link to="/" tag="li" active-class="active" exact>
						<a>
							<i class="fa fa-dashboard"></i>
							<span>Dashboard</span>
						</a>
					</router-link>
					<router-link to="/product" tag="li" active-class="active" exact>
						<a>
							<i class="fa fa-calendar"></i>
							<span>Product</span>
						</a>
					</router-link>
				</ul>
			</section>
		</aside>
		<div class="content-wrapper">
			<router-view></router-view>
		</div>
		<footer class="main-footer">
			<div class="pull-right hidden-xs">
				<kbd>1.0.0@beta1</kbd>
			</div>
			<code><i class="fa fa-code"></i> with <i class="fa fa-heartbeat"></i> by </code> <strong>Dolphin Dreams</strong>
		</footer>
	</div>
</template>

<script>
export default {
	created() {
		$('body').attr('class', 'sidebar-mini fixed wysihtml5-supported skin-green')
	},
}
</script>

<style>
button {
	outline: none !important;
}

:not(input):not(textarea) {
	user-select: none;
}

:not(input):not(textarea) {
	cursor: default;
}

a:hover,
a>*:hover,
button:hover,
button>*:hover {
	cursor: pointer;
}

* {
	-webkit-user-drag: none;
}

.main-header .logo {
	font-family: 'Source Sans Pro', sans-serif;
}
</style>

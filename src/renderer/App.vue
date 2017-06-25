<template>
	<div id="app" class="wrapper">
		<router-view name="header"></router-view>
		<router-view name="sidebar"></router-view>
		<router-view name="content"></router-view>
		<router-view name="footer"></router-view>
		<router-view name="modal"></router-view>
	</div>
</template>

<script>
import * as $ from 'jquery'
export default {
	created: function () {
		$('body').attr('class', 'sidebar-mini fixed wysihtml5-supported skin-green')
	}
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

.content-wrapper {
	padding-bottom: 51px !important;
}

.main-footer {
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	z-index: 999;
}

.modal {
	text-align: center;
}

@media screen and (min-width: 768px) {
	.modal:before {
		display: inline-block;
		vertical-align: middle;
		content: " ";
		height: 100%;
	}
}

.modal-dialog {
	display: inline-block;
	text-align: left;
	vertical-align: middle;
}
</style>

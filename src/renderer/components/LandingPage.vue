<template>
	<div> ----------------------------{{this.$route.path}}--------------------------------------</div>
</template>

<script>

export default {
	computed: {
		currentView: function () {
			return "/"
		}
	},
}
</script>

<style>

</style>

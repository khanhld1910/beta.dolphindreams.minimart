<template>
	<div class="content-wrapper">
		<LandingPage v-if="this.$route.path == '/'"></LandingPage>
		<router-view v-else></router-view>
	</div>
</template>

<script>
import LandingPage from "../LandingPage.vue"
export default {
	components: {
		LandingPage
	},
}
</script>

<style>

</style>

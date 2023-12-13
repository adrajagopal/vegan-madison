<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
</script>

<template>
	<header>
		<SiteHeader />
	</header>

	<RouterView />
</template>

<style scoped>
header {
	position: absolute;
	padding: 16px;
	top: 8px;
	left: 75px;
	z-index: 450;
	background-color: var(--paper);
	border-radius: var(--corners);
	box-shadow: var(--card-shadow);
}
</style>

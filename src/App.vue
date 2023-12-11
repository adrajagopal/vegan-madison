<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
</script>

<template>
	<header>
		<inner-column>
			<SiteHeader />
		</inner-column>
	</header>

	<RouterView />
</template>

<style scoped></style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<inner-column>
			<div class="site-header">
				<picture class="logo">
					<img alt="VM logo" src="@/assets/logo.svg" />
				</picture>

				<div class="wrapper">
					<nav>
						<RouterLink to="/">Home</RouterLink>
						<RouterLink to="/add-restaurant">Add restaurant</RouterLink>
					</nav>
				</div>
			</div>
		</inner-column>
	</header>

	<RouterView />
</template>

<style scoped>
.site-header {
	display: flex;
	justify-content: space-between;

	& nav {
		display: flex;
		gap: 10px;
	}
}

.logo {
	width: 100px;
}
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
	var map = L.map("map").setView([43.07485907699501, -89.38413717048415], 13);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	var greenOwl = L.marker([43.0924168968808, -89.35550384616374]).addTo(map);

	var message = "Green Owl";

	greenOwl.bindPopup(
		`<h1 style='font-weight: 700;'>${message}</h1><p>no desserts for u, dirty binch ass</p>`,
	);
	// ideally you'd use the L.popup() factory to create popups
});
</script>

<template>
	<main>
		<div id="map"></div>
	</main>
</template>

<style scoped>
#map {
	height: 100vh;
	width: 100vw;

	& div.leaflet-popup-content-wrapper {
		/*not working*/
		background-color: black;
	}
}
</style>

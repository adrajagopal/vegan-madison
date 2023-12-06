<script setup>
import { reactive } from "vue";

const restaurant = reactive({
	name: "",
	lat: "",
	long: "",
	cuisine: "",
});

const database = window.localStorage;

function getList(key) {
	return database.getItem(key);
}

function updateList(key, array) {
	database.setItem(key, array);
}

function add() {
	if (getList("restaurants") === null) {
		updateList("restaurants", [JSON.stringify(restaurant)]);
	}

	// const currentList = getList("restaurants");

	// newList = [...currentList, restaurant];

	// updateList("restaurants", newList);

	console.log(getList("restaurants"));
}
</script>

<template>
	<h1 class="xxl-voice">Add restaurant</h1>

	<form @submit.prevent="add">
		<div class="question">
			<label class="large-voice" for="name"
				>What's the name of the restaurant?</label
			>
			<input required id="name" type="text" v-model="restaurant.name" />
		</div>

		<div class="multi">
			<p class="large-voice">
				What are the coordinates of the restaurant, in decimal degree
				notation?
			</p>
			<div class="option">
				<label class="large-voice" for="lat">Latitude</label>
				<input required id="lat" type="number" v-model="restaurant.lat" />
			</div>

			<div class="option">
				<label class="large-voice" for="long">Longitude</label>
				<input required id="long" type="number" v-model="restaurant.long" />
			</div>
		</div>

		<div class="question">
			<label class="large-voice" for="cuisine">What's the cuisine?</label>
			<input
				required
				id="cuisine"
				type="text"
				v-model="restaurant.cuisine"
			/>
		</div>

		<button type="submit">Add restaurant</button>
	</form>
</template>

<style scoped></style>

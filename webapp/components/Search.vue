<template>
  <div class="searchRoot">
    <div class="searchInput">
      <label>Movie title:</label>
      <input type="text" ref="movieTitleInput">
    </div>
    <button class="searchButton" @click="searchForMovies">Search</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const emit = defineEmits(["searched"]);

  const movieTitleInput = ref(null);

  async function searchForMovies() {
    const title = movieTitleInput.value.value;
    const response = await fetch(`http://localhost:8080/movies?search=${title}`);
    const data = await response.json();
    console.log(data);
    if (response.status == 200) {
      emit("searched", {movies: data.movies});
      
    } else {
      // handle 400, 500 errors
    }
  }
</script>

<style>
  .searchRoot {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 8px;
  }
  .searchInput {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
  }
  .searchButton {
    width: 100px;
  }
</style>
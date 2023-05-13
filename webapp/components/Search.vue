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
  
  const movieTitleInput = ref(null);

  function searchForMovies() {
    const title = movieTitleInput.value.value;
    fetch(`http://localhost:8080/movies?search=${title}`).then((response) => {
      console.log(response);
    })
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
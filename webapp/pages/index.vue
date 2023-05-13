<template>
  <main>
    <Search />
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}

  function getSearchResults(movies) {
    console.log(movies);
  }
  
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>
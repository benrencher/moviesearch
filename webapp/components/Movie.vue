<template>
  <div class="movieRoot">
    <h3>{{ title }}</h3>
    <img :src="posterImageUrl" />
    <p>{{ popularitySummary }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    posterImageUrl: String,
    popularitySummary: String
  })
</script>

<style>
  .movieRoot {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
  }
</style>
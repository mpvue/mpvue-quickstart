<template>
  <div>
    <p class="card">
      \{{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
.card {
  padding: 10px;
}
</style>

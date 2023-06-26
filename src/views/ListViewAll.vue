<script setup>
import AppListAll from '../components/AppListAll.vue'

</script>

<template>
  <Suspense>
    <AppListAll @submit.prevent="onSubmit"/>
  </Suspense>
</template>

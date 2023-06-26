<script setup>
import AppList from '../components/AppList.vue'

</script>

<template>
 
  <Suspense>
    <AppList @submit.prevent="onSubmit"/>
  </Suspense>
  <main>
  </main>
</template>

<script setup>

import { RouterView } from 'vue-router'

import 'materialize-css/dist/css/materialize.min.css'


</script>

<template>
  <header>
    <div class="wrapper">
    <TableItem > {{ msg }}</TableItem>
    </div>
  </header>

  <RouterView />
</template>


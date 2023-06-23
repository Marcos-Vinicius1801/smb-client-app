<script setup>
//import NavbarItem from '../components/NavbarItem.vue'
import TableItem from '../components/TableItem.vue'
import InputItem from '../components/InputItem.vue'
</script>

<template>
  <main>
    <Suspense>
    <InputItem/>
  </Suspense>
    <Suspense>
      <TableItem />
    </Suspense>
  </main>
</template>

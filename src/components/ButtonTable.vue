<script setup>
defineProps(['label'])
function test(){
  console.log('button clicked')
}
</script>
<template>
<a class="red darken-2 btn">{{ label }}</a>
</template>
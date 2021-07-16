<template>
  <div>
    {{msg}} {{age}}
  </div>
</template>

<script setup>
  import { defineProps } from "vue"
  defineProps({
    msg: String
  })
  ref: age = 100
</script>

<style>

</style>
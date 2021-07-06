<template>
  <div>
    <h2>{{name}}</h2>
    <div>
      <hello-world :msg="msg" ></hello-world>
    </div>
  </div>
</template>

<script lang="ts">
import { ref,defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  },
  data() {
    return {
      name: "home Page",
      msg: "hello world component"
    }
  }
})
</script>

<style>

</style>
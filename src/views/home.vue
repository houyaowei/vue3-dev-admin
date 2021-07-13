<template>
  <div>
    <h2>{{name}}</h2>
    <div>
      <hello-world :msg="msg" ></hello-world>
      <form-test></form-test>
    </div>
  </div>
</template>

<script lang="ts">
import { ref,defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import FormTest from './FormTest.vue'

export default defineComponent({
  components: {
    HelloWorld,
    FormTest
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
<template>
  <div>
    <h2>{{name}}</h2>
    <div>
      <div>props测试</div>
      <props-test msg="2222"></props-test>
    </div>
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
import PropsTest from "./test.vue"

export default defineComponent({
  components: {
    HelloWorld,
    FormTest,
    PropsTest
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
<template>
  <div>
    <h2>{{name}}</h2>
    <div>
      <!-- <props-test msg="2222"></props-test> -->
    </div>
    <div v-if="userName">
      {{"hello," + userName + "!"}} 
    </div>
    <div>
      <hello-world :msg="msg" ></hello-world>
      <form-test></form-test>
    </div>
    
  </div>
</template>

<script lang="ts">
import { ref,defineComponent,toRaw,computed } from 'vue'
import { useStore } from '@/store'
import {mapState, mapActions } from "vuex"
import HelloWorld from '@/components/HelloWorld.vue'
import FormTest from './FormTest.vue'
// import PropsTest from "./test.vue"

export default defineComponent({
  components: {
    HelloWorld,
    FormTest,
    // PropsTest
  },
  // computed: {
  //   ...mapState({
  //     userName: state => state.user.name
  //   })
  // },
  setup() {
    
    const store = useStore()
    
    // const stateProxy = toRaw(store.state)
    /**
     * 获得state有两种方法，第一种使用mapState，第二种在setup中使用computed
     */
    let userName = computed(() => store.state.user.name);
    return {
      name: "home Page",
      msg: "hello world component",
      userName
    }
  }

})
</script>

<style>

</style>
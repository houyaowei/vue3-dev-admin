<template>
  <el-form :inline="true" :model="formData" :rules="formRules" class="demo-form-inline" size="small">
    <el-form-item label="用户" prop="name">
      <el-input v-model="formData.name" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input  v-model="formData.password" type="password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">增加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {ref, defineComponent, reactive,toRefs} from "vue"
export default defineComponent({
  name: "FormTest",
  setup(){
    let state = reactive({
      formData: {
        name: "",
        password: ""
      },
      formRules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' },],
        password: [{ required: true, message: '请输入活动名称', trigger: 'blur' },]
      }
    })

    async function onSubmit(){
      console.log("form test")
    }
    return {
      ...toRefs(state),
      onSubmit
    }
  }
})
</script>

<style>

</style>
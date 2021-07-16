<template>
  <el-form  ref="formRef" :inline="true" :model="formData" :rules="formRules" class="demo-form-inline" size="small">
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
import {ref, defineComponent, reactive,toRefs } from "vue"
import { useStore } from '@/store'
import { UserActionTypes } from '@/store/modules/user/action-types'

export default defineComponent({
  name: "FormTest",
  setup(){
    //form表单引用
    let formRef = ref(null);
    //实例话store
    const store = useStore()

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

    const methods = reactive({
      onSubmit: ()=> {
        (formRef.value).validate(async(valid) => {
          if (valid) {
            await store.dispatch(UserActionTypes.ACTION_LOGIN, state.formData)
          } else {
            return false
          }
        })
      }
    });

    return {
      formRef,
      ...toRefs(state),
      ...toRefs(methods)
    }
  }
})
</script>

<style>

</style>
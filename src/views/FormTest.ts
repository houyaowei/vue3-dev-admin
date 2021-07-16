import { unref,Ref } from "vue"

export function loginValidate<T extends Object=any>(formRef: Ref){
  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    return data as T;
  }

  return { validForm };
}
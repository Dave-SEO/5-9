import { defineStore } from 'pinia';
import { store } from '/@/store';
export const useMixcheckStore = defineStore({
  id: 'mixcheck',
  state: () => ({
    radioCheck: true,
    checkboxCheck: false,
    mixcheckVal: '',
    checkBoxFn : [],
    defaultVal: ''
  }),
  actions: {
    checkRadio(checked) {
     this.radioCheck = checked
    },
    checkboxChange(checked){
      this.checkboxCheck = checked
    },
    mixcheckValChange(val){
      this.mixcheckVal = val
    },
    checkBoxFnChange(fn: never){
      this.checkBoxFn.push(fn)
    },
    setdefaultVal(val){
      this.defaultVal = val
    }
  }
})

// Need to be used outside the setup
export function useMixcheckStoreWithOut() {
  return useMixcheckStore(store);
}

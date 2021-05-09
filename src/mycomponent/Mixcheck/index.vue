<template>
  <div class="c-mixcheck" >
    <slot ></slot>
  </div>
</template>
<script type='ts'>
import {defineComponent, nextTick, onMounted, ref} from 'vue'
export default defineComponent({
  name: 'Mixcheck',
  props: {
    default: {
      type: String
    },
    modelValue: {
      type: String || Array,
      required: true
    }
  },
  mounted(){
    console.log('mounted', this)
  },
  setup(props, {emit}){
    // 获取checkbox 重置
     const checkedLabel = []
     const checkBoxArr = []
     const checkBoxParentFn = (Fn) => {
          console.log(Fn)
          if(Fn != null){
            checkBoxArr.push(Fn)
          }
     }
    const restCheckBox = () => {
       checkBoxArr.map(res => res())
     }

    // 获取radio 重置
    const radioArr = []
    const radioParentFn = (Fn) => {
      console.log('radioFn', Fn)
      if(Fn !== null){
        radioArr.push(Fn)
      }
    }
    const restRadio = () => {
      radioArr.map(res => res())
    }

    // 点击内容
    const selectCheck = []
    const selectCheckFn = (select) => {
      if(typeof select !== 'string'){
        emit('update:modelValue', JSON.parse(JSON.stringify(select)))
      }else{
        emit('update:modelValue', select)
      }
    }

    // 默认选中
    const defaultSelect = props.modelValue
    // console.log('modelValue', props.modelValue)
    return {
      radioParentFn,
      checkBoxParentFn,
      restCheckBox,
      restRadio,
      checkedLabel,
      selectCheck,
      selectCheckFn,
      defaultSelect
    }
  }
})
</script>
<style lang="less" scoped>
.c-mixcheck {
  position: relative;
  display: inline-flex;
  font-size: 0;

  /deep/ .mixcheck-item {
    height: 32px;
    padding: 0px 15px;
    line-height: 30px;
    color: #333;
    font-size: 14px;
    margin: 0;
    user-select: none;
    background-color: #fff;
    border: 1px solid #dcdee2;
    margin-right: -1px;
    cursor: pointer;
    &:first-child {
      border-left: 1px solid #dcdee2;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.c-wrapper-checked {
      color: #1890ff;
      border-color: #1890ff;
      background-color: #f0f9ff;
      z-index: 1;
      &:first-child {
        box-shadow: none;
      }
      &:after {
        border-left-color: #1890ff;
      }
    }
    &.c-wrapper-disabled {
      color: #cccccc;
      background-color: #f7f7f7;
      border-color: #dcdee2;
      cursor: not-allowed;
      box-shadow: none !important;
      &:first-child {
        border-left-color: #dcdee2;
      }

      &.c-wrapper-checked {
        color: #ffffff;
        background-color: #e6e6e6;

        &:after {
          border-left-color: #95b5d6;
        }
      }
    }

    .c-mix-input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
}
</style>

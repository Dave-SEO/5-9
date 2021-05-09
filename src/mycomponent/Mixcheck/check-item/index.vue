<template>
  <label :class="wrapClasses">
    <span class="c-check-item">
       <input
        type="checkbox"
        class="c-mix-input"
        :value="label"
        :checked="currentValue"
        @change="checkboxChange"
        ref="elcheckBox"
        />
         <slot>
          <span >
            {{ label }}
          </span>
        </slot>
    </span>
  </label>
</template>
<script type='ts'>
import {computed, defineComponent, nextTick, onMounted, ref} from 'vue'
export default defineComponent({
  name: 'CheckItem',
  data(){
    return {
      currentValue: false,
      checkedLabel: [],
      defaultVal: []
    }
  },
  props: {
    label:{
      type: String
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.$parent.checkBoxParentFn(this.restCheckBox)
      this.defaultVal = this.$parent.defaultSelect
    })
  },
  watch: {
    'defaultVal': function(){
      if(this.defaultVal instanceof Array){
          this.$parent.checkedLabel = this.defaultVal
          this.defaultVal.forEach(res => {
            if(res === this.label){
              this.currentValue = true
            }else{
              // this.currentValue = false
            }
          })
      }
    }
  },
  methods: {
    restCheckBox(){
      this.currentValue = false
      this.$parent.checkedLabel = []
    },
    checkboxChange(event){
      // brothers
      const checked = event.target.checked
      const labelVal = event.target.value

      const allCheck = checked || this.$parent.checkedLabel.length > 1
      if(checked){
        const index = this.$parent.checkedLabel.indexOf(labelVal)
        if(index === -1){
          this.$parent.checkedLabel.push(labelVal)
        }
      }else{
        if(this.$parent.checkedLabel.length < 2){
          return false
        }else{
          const index = this.$parent.checkedLabel.indexOf(labelVal)
          this.$parent.checkedLabel.splice(index, 1)
        }
      }
      allCheck && (this.currentValue = checked)
      console.log('this.$parent.checkedLabel', this.$parent.checkedLabel)
      this.$parent.selectCheckFn(this.$parent.checkedLabel)
      this.$parent.restRadio()
    }
  },
  computed: {
    wrapClasses(){
      return [
        'mixcheck-item',
        'c-check-wrapper',
        {
          'c-wrapper-checked': this.currentValue,
        }
      ]
    }
  }
})
</script>
<style lang="less" scoped>
.c-check-wrapper {
  min-width: 94px;
  text-align: center;
  position: relative;
  &:hover {
    color: #3990ec;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: -3px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #dee4f5;
    transform: rotate(-45deg);
  }
  .c-mix-input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }
}
</style>

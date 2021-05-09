<template>
  <label :class="wrapClasses">
    <span>
      <input
        type="radio"
        class="c-mix-input"
        :checked="currentValue"
        @change="radioChange"
        :value="label"
      >
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>
<script type='ts'>
import {computed, defineComponent, ref, getCurrentInstance, onMounted, nextTick} from 'vue'
export default defineComponent({
  name: 'RadioItem',
  data() {
    return {
      currentValue: false,
      defaultVal: ''
    }
  },
  props: {
    label:{
      type: String
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.$parent.radioParentFn(this.restRadio)
      console.log('this.$parent.defaultSelect', this.$parent.defaultSelect)
      this.defaultVal = this.$parent.defaultSelect
    })
  },
  methods: {
    radioChange(e){
       const checked = e.target.checked
       const label = e.target.value
       this.$parent.selectCheckFn(label)
       this.$parent.restRadio()
       this.currentValue = checked
       this.$parent.restCheckBox()
    },
    restRadio(){
       this.currentValue = false
    }
  },
  watch: {
    'defaultVal': function(){
      if(typeof this.defaultVal === 'string' && this.defaultVal === this.label){
        this.currentValue = true
      }
    }
  },
  computed: {
    wrapClasses(){
      return [
        'mixcheck-item',
        'c-radio-wrapper',
        {
          'c-wrapper-checked': this.currentValue
        }
      ]
    }
  }
})
</script>
<style lang="less" scoped>
.c-radio-wrapper {
  position: relative;
  min-width: 94px;
  text-align: center;

  &:hover {
    color: #3990ec;
  }

  .c-mix-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
  }
}
</style>

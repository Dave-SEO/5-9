<template>
  <div class="tableStyle">
   <div class="tableBox">
      <Table :columns="columns" :data-source="dataSource">
      <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <slot :name="item" v-bind="data"></slot>
      </template>
    </Table>
   </div>
  </div>
</template>
<script lang='ts'>
import {defineComponent, PropType} from 'vue'
import {Table} from 'ant-design-vue'
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  props:{
    dataSource: {
      type: Array as PropType<any[]>
    },
    columns: {
      type: Array as PropType<any[]>
    }
  },
  setup(){
    return {
    }
  },
  components: {
    Table,
    SmileOutlined,
    DownOutlined,
  }
})
</script>
<style lang="less" scoped>
  .tableStyle{
    padding: 1rem;

    .tableBox{
      padding: 10px 8px;
      background: #fff;
    }
  }
</style>

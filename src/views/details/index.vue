<template>
  <div>
    <div class="btnBox">
      <Button type="primary" class="marginright" @click="showModal">新增业务员</Button>
      <Button type="primary" class="marginright">新增业账号</Button>
      <Button type="primary" class="marginright">上传业务员二维码</Button>
    </div>
    <br>
    <br>
    <Mixcheck v-model="carrier">
       <RadioItem label="NONE">不限</RadioItem>
       <RadioItem label="NONE1">不限1</RadioItem>
       <CheckItem label="MOBILE" @checkChange='checkChange'>移动</CheckItem>
       <CheckItem label="UNICOM">联通</CheckItem>
       <CheckItem label="TELCOM">电信</CheckItem>
     </Mixcheck>
      {{carrier}}
        <br>
        <br>
      <Mixcheck v-model="carrier1">
       <RadioItem label="NONE">不限</RadioItem>
       <CheckItem label="shanxi">山西</CheckItem>
       <CheckItem label="zhejiang">浙江</CheckItem>
       <CheckItem label="hainan">海南</CheckItem>
     </Mixcheck>
    <basicTable :dataSource="dataSource" :columns="columns">
        <template #name="{ record }">{{ record.name }} </template>
        <template #tags="{ record }"> tags: 12{{ record.id }} </template>
        <template #action="{ record }">
          <Button type="link" @click="editHanler(record)">修改</Button>
          <Popconfirm title="确认删除？" @confirm="deleteHanler($event, record)">
            <template #icon><question-circle-outlined style="color: red" /></template>
            <Button type="link">删除</Button>
          </Popconfirm>
        </template>
        <template #isStop="{ record }">
            <Switch
              checked-children="yes"
              un-checked-children="no"
              v-model:checked="record.status"
              @click="switchHandler(record)"
            ></Switch>
        </template>
    </basicTable>

    <Modal  v-model:visible="addOperatorName"
        title="新增业务员" @ok="handleOk"
        centered
        >
        <div class="container">
          <div class="inputBox">
            <label class="label">业务员昵称：</label>
            <Input v-model:value="operatorName" placeholder="请输入业务员昵称"></Input>
          </div>
        </div>
    </Modal>

    <Modal  v-model:visible="addOperatorName"
        title="新增业务员账号" @ok="handleOk"
        centered
        >
        <div class="container">
          <div class="inputBox">
            <label class="label">业务员昵称：</label>
            <Input v-model:value="operatorName" placeholder="请输入业务员名称"></Input>
          </div>

          <div class="inputBox">
            <label class="label">业务员账号：</label>
            <Input v-model:value="operatorName" placeholder="请输入业务员名称"></Input>
          </div>
        </div>
    </Modal>



    <Modal  v-model:visible="addOperatorName"
        title="新增业务员账号" @ok="handleOk"
        centered
        >
        <div class="container">
          <div class="inputBox">
            <label class="label">分码上限值：</label>
            <Input v-model:value="operatorName" placeholder="请输入业务员名称"></Input>
          </div>
        </div>
    </Modal>
  </div>
</template>
<script lang='ts'>
import {defineComponent, ref} from 'vue'
import {basicTable, Mixcheck, CheckItem, RadioItem} from '../../mycomponent'
import {Switch, Button, Modal, Input, Popconfirm} from 'ant-design-vue'
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
const columns = [
  {
    title: '业务员昵称',
    dataIndex: 'name',
    key: 'name',
    slots: {customRender: 'name' },
  },
  {
    title: '业务员id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: '业务员账号',
    dataIndex: 'zhanghao',
    key: 'zhanghao',
  },
  {
    title: '分码上限值',
    key: 'codeValue',
    dataIndex: 'codeValue',
    slots: { customRender: 'tags' },
  },
  {
    title: '每轮进粉数',
    key: 'fansNum',
    dataIndex: 'fansNum'
  },
  {
    title: '是否暂停',
    key: 'isStop',
    slots: { customRender: 'isStop' }
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    codeValue: 32,
    zhanghao: 'New York No. 1 Lake Park',
    fansNum: 1,
    tags: ['nice', 'developer'],
    status: false
  },
  {
    key: '2',
    name: 'Jim Green',
    codeValue: 42,
    zhanghao: 'London No. 1 Lake Park',
    tags: ['loser'],
    fansNum: 1,
    status: true
  },
  {
    key: '3',
    name: 'Joe Black',
    codeValue: 32,
    zhanghao: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    fansNum: 1,
    status: true
  },
];
export default defineComponent({
  name: 'details',
  setup(){
    const carrier = ref(['MOBILE','UNICOM'])
    const carrier1 = ref('NONE')
    const addOperatorName = ref(false)
    const operatorName = ref()
    const showModal = () => {
      addOperatorName.value = !addOperatorName.value
    }
    const handleOk = () => {
      addOperatorName.value = false
    }
    const switchHandler = (rows) => {
        console.log(rows)
    }
    const editHanler = (rows) => {
      console.log(rows)
       addOperatorName.value = !addOperatorName.value
    }
    const deleteHanler = (e: MouseEvent, rows) => {
       console.log(e)
       console.log(rows)

    }
    const checkChange = () => {
    }
    return {
      checkChange,
      carrier,
      carrier1,
      dataSource,
      columns,
      switchHandler,
      addOperatorName,
      handleOk,
      showModal,
      operatorName,
      editHanler,
      deleteHanler
    }
  },
  components: {basicTable, Switch, Button, Modal, Input, Popconfirm, QuestionCircleOutlined,
   Mixcheck, CheckItem, RadioItem
  }
})
</script>
<style lang="less" scoped>
  .marginright {
    margin-right: 10px;
  }

  .btnBox{
    margin: 15px 0 0 15px;
  }

  .container{
    height: 150px;
    padding: 0 30px 0 10px;
    overflow: hidden;

    .inputBox{
      margin-top: 20px;
      margin-left: 20px;
    }
  }
</style>

<template>
  <div class="row">
    <div class="col-8 px-4">
      <div class="mb-3">
        <h4 class="my-4">添加新的菜品</h4>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm"
            >菜品名称</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="newcai.name"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">描述</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="newcai.miaoshu"
          />
        </div>
        <p><strong>选项1：</strong></p>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">类别</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="newcai.options.one.fenliang"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">价格</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="newcai.options.one.price"
          />
        </div>
        <p><strong>选项2：</strong></p>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">尺寸</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="newcai.options.two.fenliang"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">价格</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="newcai.options.two.price"
          />
        </div>
        <div class="d-grid gap-2">
          <button @click="add" class="btn btn-success" type="button">
            添加
          </button>
          <!-- <button class="btn btn-primary" type="button">Button</button> -->
        </div>
      </div>
    </div>
    <div class="col-4">
      <h4 class="my-4">菜单</h4>
      <table class="table">
        <thead class="thead-default">
          <tr>
            <td>品种</td>
            <td>删除</td>
          </tr>
        </thead>
        <tbody v-for="i in menu" :key="i.id">
          <tr>
            <td>{{ i.name }}</td>
            <td>
              <button @click="deleteData(i)" class="btn btn-sm btn-outline-danger">×</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "ManagePage",
  data() {
    return {
      newcai: {
        name: "",
        options: {
          one: {
            fenliang: "",
            price: "",
          },
          two: {
            fenliang: "",
            price: "",
          },
        },
      },
      menu : []
    };
  },
  created() {
    // axios.get('/menu.json').then((res)=>{
    //     let data = [];
    //     for(let key in res.data){
    //         res.data[key].id = key;
    //         data.push(res.data[key])
    //     }
    //     this.menu = data;
    // })
  },
  methods: {
    add() {
      axios.post('/menu.json',this.newcai).then(()=>{

      })

    },
    deleteData(i) {
        fetch('/menu'+i.id+'/.json')
    }
  },
};
</script>
  
  <style>
</style>
<template>
  <div class="row">
    <div class="col-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>菜品</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="i in items" :key="i.name">
          <tr>
            <td>
              <strong>{{ i.name }}</strong>
            </td>
          </tr>
          <tr v-for="j in i.options" :key="j.fenliang">
            <td>{{ j.fenliang }}</td>
            <td>{{ j.price }}</td>
            <td>
              <button
                @click="addToBasket(i.name, j)"
                class="btn btn-sm btn-outline-success"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-4">
      <div v-show="basket.length">
        <table class="table">
          <thead class="thead-defalut">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="i in basket" :key="i.name">
            <tr>
              <td>
                <button @click="jian(i)" class="btn btn-sm">-</button>
                <span>{{ i.n }}</span>
                <button @click="jia(i)" class="btn btn-sm">+</button>
              </td>
              <td>{{i.item}}{{ i.fenliang }}</td>
              <td>{{i.price * i.n}}</td>
            </tr>
          </tbody>
          <p>总价：{{ total }}RMB</p>
          <button type="submit" class="btn btn-block btn-success">提交</button>
        </table>
      </div>
      <div v-show="!basket.length">
        购物车没有菜品
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from 'axios';
export default {
  name: "MenuPage",
  data() {
    return {
      basket: [],
      items: {
        maocai: {
          name: "冒菜",
          options: {
            1: {
              fenliang: "纯素",
              price: "10",
            },
            2: {
              fenliang: "荤素混合",
              price: "20",
            },
            3: {
              fenliang: "纯肉",
              price: "40",
            },
          },
        },
        pizza: {
          name: "披萨",
          options: {
            1: {
              fenliang: "水果",
              price: "30",
            },
            2: {
              fenliang: "榴莲",
              price: "50",
            },
            3: {
              fenliang: "瘦肉",
              price: "40",
            },
          },
        },
        jianbing: {
          name: "山东杂粮煎饼",
          options: {
            1: {
              fenliang: "肉松",
              price: "7",
            },
            2: {
              fenliang: "肉松辣条",
              price: "8",
            },
            3: {
              fenliang: "烤肉",
              price: "12",
            },
          },
        },
        mian: {
          name: "干拌面",
          options: {
            1: {
              fenliang: "豌豆杂酱",
              price: "7",
            },
            2: {
              fenliang: "牛肉",
              price: "8",
            },
            3: {
              fenliang: "肥肠",
              price: "12",
            },
          },
        },
      },
    };
  },
  created() {
    axios.post('/menu.json').then((res)=>{
        this.items = res.data
        this.$store.commit('add',re.data);
    })
  },
  computed: {
    total() {
        let sum = 0;
        for(let i in this.basket){
            sum += (this.basket[i].price*this.basket[i].n)
        }
        return sum;   
    }
  },
  methods: {
    addToBasket(item, options) {
        if(this.basket.length > 0) {
            let re = this.basket.filter((i) => {
                return i.item === item && i.fenliang === options.fenliang;
            })
            if(re.length >0) {
                 re[0].n++;
            }else{
                this.basket.push({
                item: item,
                fenliang: options.fenliang,
                price: options.price,
                n: 1,
            });
            }
           
        }else {
            this.basket.push({
                item: item,
                fenliang: options.fenliang,
                price: options.price,
                n: 1,
            });
        }
      
    },
    jia(i) {
        i.n++;
    },
    jian(i) {
        if(i.n < 0){
            this.basket.splice(i,1)
        }
    }
  },
};
</script>
  
  <style>
</style>
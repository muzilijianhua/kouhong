<template>
<div>
  <div class="shopcar" v-for="(item,i) in $store.state.car" :key="i">
    <mt-switch v-model="item.selected" @change="selecteds(i,$store.state.car[i].selected)"></mt-switch>
    <div class="content">
      <img src="../../assets/logo.png" alt>
      <div class="right">
        <h1>迪奥口红让你成为女人</h1>
        <span class="num">单价:{{item.price}}</span>
        <span>
          <button @click="reduce(i)">-</button>
          <input type="text" @change="myinput" v-model="item.num">
          <button @click="add(i)">+</button>
          <button @click="del(i,item.id)">删除</button>
        </span>
      </div>
    </div>
    
  </div>
  <div>
    <div class="shopcar" v-for="(item,i) in list" :key="i">
    <input type="checkbox" :checked="item.selected" @click="check(item)" >
    <div class="content">
      <img src="../../assets/logo.png">
      <div class="right">
        <h1>迪奥口红让你成为女人</h1>
        <span class="num">单价:{{item.price}}</span>
        <span>
          <button @click="reduce(i)">-</button>
          <input type="text" @change="myinput" v-model="item.num">
          <button @click="add(i)">+</button>
          <button @click="del(i)">删除</button>
        </span>
      </div>
    </div>
    
  </div>
  </div>






  <div>
      <p>总计：不含运费</p>
      <span>已勾选{{num}}件</span><span>总价：￥{{allprice}}</span>
      <button>去结算</button>
  </div>
<nav class="mui-bar mui-bar-tab mui-active">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">主页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="bardg">{{num}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/myself">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
      
    </nav>

</div>
</template>
<script>
export default {
  name: "shopcar",
  data() {
    return {list:[
      {id:1,price:199,num:5,selected:true},
      {id:2,price:299,num:6,selected:false},
      {id:3,price:399,num:7,selected:false},
      {id:4,price:599,num:8,selected:true},
    ]}
  },
 computed:{
    num(){
      var n = 0
      this.list.forEach(item=>{
        if(item.selected){
          n +=item.num
        }
      })
      return n
    },
    allprice(){
       var price = 0
      this.list.forEach(item=>{
        if(item.selected){
          price+=item.num*item.price
        }
      })
      return price
    }
 },
  methods: {
    reduce(i) {
        this.$store.state.car[i].num--
    },
    add(i) {
      this.$store.state.car[i].num++
    },
    check(item){
        item.selected=!item.selected
    },
    myinput() {},
    del(i){
      this.list.splice(i,1)
    },
    selecteds(i,c){
        console.log(c)
       
    }
  }
};
</script>
<style scoped>
.shopcar{
    display: flex;
    /* height: 60px; */
    align-content: center
}
.content{
    display: flex;
    justify-content: space-between
}
.content img{
    width: 60px;
    height: 60px;
    margin-right: 5px
}
.right input{
    width: 15%;
    padding: 3px;
    text-align: center
}
.right h1{
    font-size: 14px;
    font-weight: 400
}
</style>

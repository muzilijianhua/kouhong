<template>
  <div id="app">
    <mt-header title="女人街">
      <a  slot="left" @click="history">
        <mt-button icon="back" v-show="flag">返回</mt-button>
      </a>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 中间 -->
    <transition mode="out-in">
    <router-view></router-view>
    </transition>
    <!-- 底部 -->
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
          <span class="mui-badge" id="bardg">{{$store.getters.getallnum}}</span>
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
  name: 'App',
  data(){
    return{
      bradg:0,
      flag:false
    }
  },
  methods:{
    history(){
      this.$router.go(-1)
    },
    
  },
  watch:{
    '$route.path':function(newval){
         if(newval=='/home'){
           this.flag=false
         }else{
           this.flag=true
         }
    }
  }
}
</script>

<style scoped>
*{margin: 0;padding: 0}
ul,li{list-style: none}
body{
  background-color: #fff;
}
.mint-header{
  background-color: rgb(135, 44, 255);
}
.mui-bar-tab .mui-tab-item.mui-active{
  color: palevioletred;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s;
}
#app{
  overflow-x: hidden;
  padding-bottom: 50px
}




.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

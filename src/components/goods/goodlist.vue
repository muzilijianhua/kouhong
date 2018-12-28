<template>
  <div class="goodlist">
    <ul>
      <li v-for="item in goodlist" :key="item.id" @click="good(item.id)">
        <img
          :src="item.url"
          alt
        >
        <h4 class="seckill_mod_goods_title">{{item.title}}</h4>
        <div class="list">
          <span class="seckill_mod_goods_info_txt">
            <span class="seckill_mod_goods_price">
              <i class="seckill_mod_goods_price_now">
                <em>¥</em>{{item.price}}
                <!--<i class="seckill_mod_goods_price_now_small"></i>-->
              </i>
              <span class="seckill_mod_goods_price_pre">¥
                <del>{{item.oldprice}}</del>
              </span>
            </span>
            <span class="seckill_mod_goods_progress">
              <i class="seckill_mod_goods_progress_txt">已售{{item.prograss}}%</i>
              <i class="seckill_mod_goods_progress_inner">
                <b class="seckill_mod_goods_progress_completed" style="width:30%"></b>
              </i>
            </span>
          </span>
          <button>购买</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "goodlist",
  data() {
    return {
        goodlist:[
            {id:1,title:"到底是发生水电费水电费水电费",price:299,oldprice:899,prograss:10,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:2,title:"到底是发生水电费水电费水电费",price:199,oldprice:849,prograss:20,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:3,title:"到底是发生水电费水电费水电费",price:399,oldprice:879,prograss:20,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:4,title:"到底是发生水电费水电费水电费",price:799,oldprice:399,prograss:25,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:5,title:"到底是发生水电费水电费水电费",price:899,oldprice:199,prograss:27,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:6,title:"到底是发生水电费水电费水电费",price:599,oldprice:599,prograss:50,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:7,title:"到底是发生水电费水电费水电费",price:499,oldprice:799,prograss:60,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:8,title:"到底是发生水电费水电费水电费",price:259,oldprice:879,prograss:70,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:9,title:"到底是发生水电费水电费水电费",price:249,oldprice:859,prograss:25,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:10,title:"到底是发生水电费水电费水电费",price:219,oldprice:879,prograss:26,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:11,title:"到底是发生水电费水电费水电费",price:229,oldprice:889,prograss:29,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},
            {id:12,title:"到底是发生水电费水电费水电费",price:219,oldprice:899,prograss:24,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545306780783&di=7884d0b63dfac8ffa51e15db5f500659&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015aa455444b930000019ae9aba183.jpg%401280w_1l_2o_100sh.jpg"},

        ]
    };
  },
  methods:{
      good(id){
          this.$router.push({ name: 'goodinfo', params: { id } })
      }
  }
};
</script>
<style scoped>
.goodlist ul{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}
.goodlist li{
    width: 49%;
    margin-top: 4px;
    border: 1px solid;
}
.goodlist li h4{
    font-size: 14px;
    font-weight: 400;
     background-color: #999;
    color: white;
}
.goodlist li img{
    width: 100%;
}
.list{
    display: flex;
    justify-content: space-around;
   
}
.list>span{
    width: 80%;
    display: block;
    font-size: 12px;
     background-color: red;
    color: white
   
}
.list button{
    background-color: red;
    color: white;
}
</style>

<template>
  <div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-if="ballflag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="@/assets/img/banner1.jpg" alt>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="@/assets/img/banner2.jpg" alt>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="@/assets/img/banner3.jpg" alt>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">美的电磁炉一天只用一度电</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <h4 class="seckill_mod_goods_title">美的电磁炉就是好</h4>
          <div class="list">
            <div class="left">
              <span class="seckill_mod_goods_info_txt">
                <span class="seckill_mod_goods_price">
                  <i class="seckill_mod_goods_price_now">
                    <em>¥</em>{{price}}
                    <!--<i class="seckill_mod_goods_price_now_small"></i>-->
                  </i>
                  <span class="seckill_mod_goods_price_pre">
                    ¥
                    <del>￥3999</del>
                  </span>
                </span>
                <span class="seckill_mod_goods_progress">
                  <i class="seckill_mod_goods_progress_txt">已售20%</i>
                  
                  <i class="seckill_mod_goods_progress_inner">
                    <b class="seckill_mod_goods_progress_completed" style="width:30%"></b>
                  </i>
                </span>
              </span>
              <div class="number">
                <span class="num">购买数量:</span>
                <span>
                  <button @click="reduce">-</button>
                  <input type="text" v-model="num" @change="myinput">
                  <button @click="add">+</button>
                </span>
              </div>
            </div>
            <div class="right">
              <button @click="addcar">加入购物车</button>
              <button>立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>商品单号：4566545645646574456</div>
          <div>商品库存：{{kc}}件</div>
          <div>上架时间：2018/12/12 12:12:12</div>
        </div>
      </div>
    </div>
    {{id}}
  </div>
</template>
<script>
export default {
  name: "goodinfo",
  data() {
    return {
      id: "",
      ballflag: false,
      kc: 999,
      num:1,
      price:199
    };
  },
  created() {
    this.id = this.$route.params.id;

   
  },
  methods: {
    addcar() {
      this.ballflag = !this.ballflag;
      var goodinfo = {id:2,price:this.price,num:this.num,selected:true}
       this.$store.commit("addcars",goodinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter: function(el, done) {
      //通过refs获取坐标点
      const ballposi = this.$refs.ball.getBoundingClientRect();
      var bardgposi = document.getElementById("bardg").getBoundingClientRect();
      var x = bardgposi.left - ballposi.left;
      var y = bardgposi.top - ballposi.top;

      el.offsetWidth;
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 1s cubic-bezier(.83,1.32,.7,.78)";
      done();
    },
    afterEnter: function(el) {
      this.ballflag = !this.ballflag;
    },
    add() {
      this.num++
      if (this.num > this.kc) {
        this.num = this.kc;
      }
    },
    reduce() {
      this.num--
      if (this.num <= 0) {
        this.num = 0;
      }
    },
    myinput() {
      if (isNaN(this.$store.count)) {
        this.$store.count = 1;
      } 
    }
  }
};
</script>
<style scoped>
.number {
  margin-top: 5px;
  display: flex;
  padding: 0 10px;
}
.number .num {
  display: block;
  width: 30%;
}
.number input {
  width: 20%;
  /* height: 30px; */
  padding: 3px 5px;
  text-align: center;
}
.right button {
  background-color: red;
  color: white;
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  left: 157px;
  top: 212px;
}
</style>

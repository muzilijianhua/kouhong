<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="@/assets/img/icon.jpg">
          <div class="mui-media-body">
            {{item.product}}
            <p class="mui-ellipsis">
              <span>发表时间：{{item.time | datafomate}}</span>
              <span>点击{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "newslist",
  data() {
    return {
      newslist: [
        {
          id: 1,
          imgurl: "@/lib/img/icon.jpg",
          product: "迪奥",
          time: new Date(),
          click: 2
        },
        {
          id: 2,
          imgurl: "@/lib/img/icon.jpg",
          product: "香奈儿",
          time: new Date(),
          click: 4
        },
        {
          id: 3,
          imgurl: "@/lib/img/icon.jpg",
          product: "纪梵希",
          time: new Date(),
          click: 6
        }
      ]
    };
  },
  created() {
    // this.getnewlist();
  },
  methods: {
    // getnewlist() {
    //   this.$http.get("http://127.0.0.1:3000/news").then(function(resolve) {
    //     console.log(resolve);
    //   });
    // }
  }
};
</script>
<style scoped>
.mui-media-body {
  font-size: 14px;
}
.mui-ellipsis {
  color: rgb(47, 47, 255);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>
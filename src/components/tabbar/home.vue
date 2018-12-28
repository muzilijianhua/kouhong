<template>
  <div>
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

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/img/icon.jpg" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/img/icon.jpg" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <img src="../../assets/img/icon.jpg" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/icon.jpg" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/icon.jpg" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/icon.jpg" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style>
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.mui-grid-view.mui-grid-9 img {
  width: 55px;
  height: 55px;
}
.mui-table-view-cell .mui-media-body {
  font-size: 12px;
}
</style>

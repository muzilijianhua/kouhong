<template>
  <div>
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <router-link
              to="/home/photolist/recommend"
              class="mui-control-item mui-active"
              data-wid="tab-top-subpage-1.html"
            >推荐</router-link>
            <router-link
              class="mui-control-item"
              to="/home/photolist/hot"
              data-wid="tab-top-subpage-2.html"
            >热点</router-link>
            <router-link
              class="mui-control-item"
              to="/home/photolist/beijing"
              data-wid="tab-top-subpage-3.html"
            >北京</router-link>
            <router-link
              class="mui-control-item"
              to="/home/photolist/Sociology"
              data-wid="tab-top-subpage-4.html"
            >社会</router-link>
            <router-link
              class="mui-control-item"
              to="/home/photolist/entertainment"
              data-wid="tab-top-subpage-5.html"
            >娱乐</router-link>
            <router-link
              class="mui-control-item"
              to="/home/photolist/Express"
              data-wid="tab-top-subpage-5.html"
            >资迅</router-link>
            <router-link
              class="mui-control-item"
              to="/home/photolist/game"
              data-wid="tab-top-subpage-5.html"
            >游戏</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>
<script>
import mui from "../../assets/mui/js/mui.js";

export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
* {
  touch-action: pan-y;
}
</style>

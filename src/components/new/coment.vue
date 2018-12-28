<template>
  <div class="coment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请水出你想说的..." v-model="content"></textarea>
    <mt-button type="primary" size="large" class="send" @click="send">发表</mt-button>
    <div v-for="(item,i) in coments" :key="i">
      <p class="user">第{{i+1}}楼 用户:{{item.user}} 发表时间:{{item.time | datafomate}}</p>
      <p>{{item.content}}</p>
    </div>
    <mt-button type="default" size="large">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  created() {
     
  },
  data() {
    return {
        coments:[
            {id:1,"user":"zs","time":new Date(),"content":"呵方法哒"},
            {id:2,"user":"ds","time":new Date(),"content":"呵递四方速递呵哒"},
            {id:3,"user":"fs","time":new Date(),"content":"呵第三方公司给呵哒"},
            {id:4,"user":"gs","time":new Date(),"content":"呵收到过水电费呵哒"},
            {id:5,"user":"hs","time":new Date(),"content":"呵 第三方士大夫呵dsf哒"},
            {id:6,"user":"ws","time":new Date(),"content":"呵呵对方是否通过哒"},
        ],
        content:""
    };
  },
  methods:{
      send(){
        var cmt = {id:7,"user":"zl",time:new Date(),"content":this.content}
        this.coments.unshift(cmt)
        this.content=""
      }
  }
};
</script>
<style scoped>
.coment h3 {
  margin-top: 30px;
}
.coment textarea {
  margin-top: 10px;
  margin-bottom: 0px;
  line-height: 30px;
  font-size: 12px;
  padding: 5px;
}
.send {
  margin-top: 2px;
}
.user{
    background-color: #999;
    color: white;
    margin-top: 10px
}
</style>

<template>
  <div>
    热度
    <ul>
      <li v-for="(item,i) in list" :key="i">
        <img v-lazy="item.url">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "recommend",
  data() {
    return {
      list: [
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        },
        {
          id: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=dc55bc78cc5c10383073c690d378f876/cc11728b4710b912fdf94a9cc9fdfc0392452293.jpg"
        }
      ]
    };
  }
};
</script>
<style>
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img{
    width: 100%;
}
</style>

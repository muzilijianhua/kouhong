<template>
    <div>
        {{id}}
    </div>
</template>
<script>
   export default{
       data(){
           return{
               id:""
           }
       },
       created(){
               this.id= this.$route.params.id
       }
   } 
</script>
<style scoped>
</style>

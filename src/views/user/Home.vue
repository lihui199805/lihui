<template>
     <div class="box">
        <header></header>
        <main><router-view></router-view></main>
        <footer></footer>
     </div>

</template>

<script>
export default {

}
</script>

<style>
   html,body,#app{
      width: 100%;
      height: 100%;
   }
   .box{
    width: 100%;
      height: 100%;
     display: flex;
     flex-direction: column;
   }
   header,footer{
        height: 50px;
        background-color: red;
      }
      main{
        flex: 1;
        overflow: scroll;
      }
</style>
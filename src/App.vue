<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
     <router-view/>
  </div>
</template>

<script>

  // import TermOne from './components/terms/TermOne.vue'
  export default {
    name: 'App',
    components: {
        // TermOne,

    },
    data() {
      return {
        
      }
    },
  }

</script>


<style>
  
  .home-page{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
  .container{
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 500px;
    text-align: center;
    border: 1px solid black;
  }
  li{
   list-style-type: none;
  }
  .home__page-list{
    display: flex;
    justify-content: space-around;
  }
  a{
    font-size: 18px;
    color: black;
  }
  ul{
    padding: 0;
  }
  .from1-to3{
    display: flex;
    flex-direction: column;
  }
  .f1{
    margin-bottom: 28px;
  }
  .from4-to6{
    display: flex;
    flex-direction: column;
  }
.f4{
  margin-bottom: 28px;
}
  p{
    align-self: self-start;
    margin-top: 140px;
    margin-left: 20px;
  }


 
</style>

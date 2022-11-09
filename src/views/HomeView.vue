<template>
  <div class="home">
    <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <nav>
             <ul class="home__page-list">
                <div class="from1-to3">
                  <router-link class="f1" to="/terms-1">Term1</router-link>
                  <router-link class="f1" to="/terms-2">Term2</router-link>
                  <router-link class="f1" to="/terms-3">Term3</router-link>
                </div>
                <div class="from4-to6">
                  <router-link class="f4" to="/terms-4">Term4</router-link>
                  <router-link class="f4" to="/terms-5">Term5</router-link>
                  <router-link class="f4" to="/terms-6">Term6</router-link>
                </div> 
            </ul>   
          </nav>
          <p >@Всі права застережено.Виконав </p>                      
        </div>
    </div>    

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>


<style scoped>
  .home__page-title{
    font-family: 'Poor Story', cursive;
  }
  .home__page-subtitle{
      font-family: 'Montserrat', sans-serif;
  }
  .home__page-list{
    font-family: 'Josefin Sans', sans-serif;
   font-style: italic;
  }
  .container{
    border-radius: 10px;
  }
  a{
    font-size: 20px;
    color: rgb(0, 140, 255);
  }
  p{
    font-family: 'Source Code Pro', monospace;
  }
 
</style>

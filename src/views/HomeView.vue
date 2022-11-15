<template>
  <div class="home">
    <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <nav>
             <ul class="home__page-list">
                <div class="from1-to3">
                  <router-link class="f1" to="/terms-1">Термін 1</router-link>
                  <router-link class="f1" to="/terms-2">Термін 2</router-link>
                  <router-link class="f1" to="/terms-3">Термін 3</router-link>
                </div>
                <div class="from4-to6">
                  <router-link class="f4" to="/terms-4">Термін 4</router-link>
                  <router-link class="f4" to="/terms-5">Термін 5</router-link>
                  <router-link class="f4" to="/terms-6">Термін 6</router-link>
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
    font-family: 'Roboto Slab', serif;
  }
  .home__page-subtitle{
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
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
    color: rgb(172 135 245);
  }
  p{
    font-family: 'Source Code Pro', monospace;
  }
  
 
</style>

<template>
    <div>
        <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <ul class="home__page-list">
                  <router-link class="f1" to="/terms-1">Term1/</router-link>
                  <router-link class="f1" to="/terms-2">Term2/</router-link>
                  <router-link class="f1" to="/terms-3">Term3/</router-link>
                   <li>Term4/</li>
                  <router-link class="f4" to="/terms-5">Term5/</router-link>
                  <router-link class="f4" to="/terms-6">Term6/</router-link>
          </ul> 
          <div class="about-term">
                <img class="term-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg" alt="">
                <div class="term-info">
                    <h2 class="term-title">Клієнт-сервер, клієнт</h2>
                    <p class="term-text">Механізм передачі інформації між віддале­ним комп'ютером, що надає свої ресурси в розпорядження користувачів, і призначеним для користувача комп'ютером, що експлуа- тує ці ресурси</p>
                    <p class="term-link">Див також <a class="term-link" href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BB%D1%96%D1%94%D0%BD%D1%82-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%BD%D0%B0_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0">посилання на сайт</a> </p>
                </div>

            </div>  
          <p>@Всі права застережено.Виконав </p>                      
        </div>
    </div>    
    </div>    
</template>

<script>
export default {
    name: 'TermOne',
    data() {
        return {

        }
    }
}
</script>

<style scoped> 
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
    width: 600px;
    height: 600px;
    text-align: center;
    border: 1px solid black;
  }
  li{
   list-style-type: none;
  }
  .home__page-list{
    display: flex;
  }
  p{
    align-self: self-start;
    margin-top: 50px;
    margin-left: 20px;  
  }
  .term-img{
    width: 150px;
    height: 150px;
    align-self: center;
  }
  .about-term{
    display: flex;
    justify-content: center;
  }
  .term-info{
    width: 300px;
  }
  a{
    color: darkblue;
  }
 
</style>
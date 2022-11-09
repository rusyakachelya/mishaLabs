<template>
    <div>
        <router-view/>
        <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <ul class="home__page-list">
                  <li class="disabled">Термін 1/</li>
                  <router-link class="f1" to="/terms-2">Термін 2/</router-link>
                  <router-link class="f1" to="/terms-3">Термін 3/</router-link>
                  <router-link class="f4" to="/terms-4">Термін 4/</router-link>
                  <router-link class="f4" to="/terms-5">Термін 5/</router-link>
                  <router-link class="f4" to="/terms-6">Термін 6/</router-link>
          </ul> 
          <div class="about-term">
                <img class="term-img" src="https://apelsin.net/assets/img/browser2.jpg" alt="">
                <div class="term-info">
                    <h2 class="term-title">Браузер</h2>
                    <p class="term-text">Cпеціальна клієнтська програма, призначе­на для перегляду вмісту web-вузлів і відо­браження документів HTML. У браузер вбу­дований транслятор мови розмітки гіпер-тексту, що компілює html-код в процесі від­криття web-сторінки    </p>
                    <p class="term-link">Див також <a class="term-link" href="https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80">посилання на сайт</a> </p>
                </div>

            </div>  
          <p class="author">@Всі права застережено.Виконав </p>                      
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
    height: 620px;
    text-align: center;
    border: 1px solid black;
    border-radius: 15px;
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
     border-radius: 5px;
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

  .home__page-title{
     font-family: 'Poor Story', cursive;
  }
  .term-title{
     font-family: 'Montserrat', sans-serif;
  }
  .term-text{
    font-family: 'Source Code Pro', monospace;
  }
  .disabled{
    font-size: 19px;
  }
 
</style>
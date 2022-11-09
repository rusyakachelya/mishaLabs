<template>
    <div>
        <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <ul class="home__page-list">
               
                  <router-link class="f1" to="/terms-1">Термін 1/</router-link>
                  <router-link class="f1" to="/terms-2">Термін 2/</router-link>
                     <li class="disabled">Термін 3/</li>
                  <router-link class="f4" to="/terms-4">Термін 4/</router-link>
                  <router-link class="f4" to="/terms-5">Термін 5/</router-link>
                  <router-link class="f4" to="/terms-6">Термін 6/</router-link>
          </ul> 
          <div class="about-term">
                <img class="term-img" src="https://geek-nose.com/wp-content/uploads/2019/02/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-2.jpg" alt="">
                <div class="term-info">
                    <h2 class="term-title">Операційна систе­ма (ОС)	</h2>
                    <p class="term-text">Комплекс програм, що постійно знаходять­ся в пам'яті; організовує управління при­строями і взаємодію з користувачем </p>
                    <p class="term-link">Див також <a class="term-link" href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D1%85_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC">посилання на сайт</a> </p>
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
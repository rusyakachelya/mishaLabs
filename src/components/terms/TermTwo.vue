<template>
    <div>
        <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <ul class="home__page-list">
                 
                  <router-link class="f1" to="/terms-1">Term1/</router-link>
                    <li>Term2/</li>
                  <router-link class="f1" to="/terms-3">Term3/</router-link>
                  <router-link class="f4" to="/terms-4">Term4/</router-link>
                  <router-link class="f4" to="/terms-5">Term5/</router-link>
                  <router-link class="f4" to="/terms-6">Term6/</router-link>
          </ul> 
          <div class="about-term">
                <img class="term-img" src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Elixir_M2U51264DS8HC3G-5T_20060320.jpg" alt="">
                <div class="term-info">
                    <h2 class="term-title">Оперативна пам'ять</h2>
                    <p class="term-text">пристрій, що запам'ятовує, зберігає інфор­мацію в цифровому вигляді. 3 оперативної пам'яті процесор комп'ютера бере програ­ми і початкові дані для обробки, в неї ж за­писуються отримані результати</p>
                    <p class="term-link">Див також <a class="term-link" href="https://uk.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0_%D0%BF%D0%B0%D0%BC%27%D1%8F%D1%82%D1%8C">посилання на сайт</a> </p>
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
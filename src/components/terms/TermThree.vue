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
                <img class="term-img" src="https://ubkmarkets.info/sites/default/files/articles/19_indetification/ind_1.png" alt="">
                <div class="term-info">
                    <h2 class="term-title">Ідентифікація</h2>
                    <p class="term-text">Процедура присвоєння ідентифікатора об'єкту чи користувачу комп'ютерної системи або встановлення відповідності між об'єктом і його ідентифікатором; упізнання.</p>
                    <p class="term-link">Див також <a class="term-link" href="https://uk.wikipedia.org/wiki/%D0%86%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F">посилання на сайт</a> </p>
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
    width: 700px;
    height: 700px;  
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
    width: 200px;
    height: 200px;
    border-radius: 5px;
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
    font-family: 'Lobster', cursive;
  }
  .term-title{
     font-family: 'Montserrat', sans-serif;
  }
  .term-text{
    font-family: 'Marck Script', cursive;
  }
  .disabled{
    font-size: 19px;
  }
</style>
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
                  <router-link class="f4" to="/terms-4">Term4/</router-link>
                   <li>Term5/</li>
                  <router-link class="f4" to="/terms-6">Term6/</router-link>
          </ul> 
          <div class="about-term">
                <img class="term-img" src="https://mariajemaria.net/sites/default/files/odd-even.png" alt="">
                <div class="term-info">
                    <h2 class="term-title">Клас</h2>
                    <p class="term-text">елемент програмного коду, що дозволяє призначати різний набір властивостей од­ним і тим же фізичним об'єктам програми.    </p>
                    <p class="term-link">Див також <a class="term-link" href="https://developer.mozilla.org/ru/docs/Web/CSS/Class_selectors">посилання на сайт</a> </p>
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
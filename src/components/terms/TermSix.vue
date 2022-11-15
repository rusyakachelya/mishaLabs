<template>
    <div>
        <div class="home-page">
        <div class="container">
          <h1 class="home__page-title">ТЛУМАЧНИЙ СЛОВНИК</h1>
          <h3 class="home__page-subtitle">Термінологія</h3>
          <ul class="home__page-list">
                  
                  <router-link class="f1" to="/terms-1">Термін 1/</router-link>
                  <router-link class="f1" to="/terms-2">Термін 2/</router-link>
                  <router-link class="f1" to="/terms-3">Термін 3/</router-link>
                  <router-link class="f4" to="/terms-4">Термін 4/</router-link>
                  <router-link class="f4" to="/terms-5">Термін 5/</router-link>
                  <li class="disabled">Термін 6/</li>
          </ul> 
          <div class="about-term">
                <img class="term-img" src="https://id-legalgroup.com/upload/images/id_569/5%20(1).jpg" alt="">
                <div class="term-info">
                    <h2 class="term-title">Конфіденційність інформації</h2>
                    <p class="term-text">властивість інформації, яка полягає в тому, що інформація не може бути отримана користувачем, який не має певних повноважень.</p>
                    <p class="term-link">Див також <a class="term-link" href="https://wiki.legalaid.gov.ua/index.php/%D0%9A%D0%BE%D0%BD%D1%84%D1%96%D0%B4%D0%B5%D0%BD%D1%86%D1%96%D0%B9%D0%BD%D0%B0_%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D1%8F">посилання на сайт</a> </p>
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
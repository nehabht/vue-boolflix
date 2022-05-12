<template>
    <main>
        <button class="btn" @click="listaContenuti()">listaContenuti</button>

        <div class="container mt-3">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 ">
            <div class="col " v-for="content in searchedContent" :key="content.id">
                <div class="card mb-3 " >

                <img :src="contentPoster(content)" alt="">  

                <div class="card_bottom">
                    <h4>{{content.title}}</h4>
                    <h4>{{content.name}}</h4>
                    <h6>{{content.media_type}}</h6>
                    <ul>
                        <li>Titolo originale: {{ content.original_title}}</li>
                        <li>
                            <span>{{content.original_language}} </span>
                        <!-- flags -->
                            <flag :iso="content.original_language === 'en' ? 'us' : content.original_language"/>
                        </li>

                    <!-- ratings -->
                        <li>Voto: 
                        <!-- rating in numeri -->
                        <!-- {{content.vote_average}} {{voteContent (content.vote_average)}} -->
                        <!-- rating in stelle -->
                            <i v-for="fullStars in voteContent(content.vote_average)" :key='fullStars.id'>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            </i>
                            <i v-for="emptyStars in 5 - voteContent(content.vote_average)" :key='emptyStars.id'>
                            <font-awesome-icon icon="fa-regular fa-star" />
                            </i>
                        </li>
                    </ul>
                    <p>{{content.overview}}</p>
                </div>
                </div>
            </div>
            </div>
        </div>

    </main>
</template>

<script>
import state from "@/state.js";




export default {
  name: "MainComponent",
  components: {
      
  },
  data: function (){
      return {
        //contentList: [],
        searchedContent: [],



      };
  },
  methods:{

        listaContenuti(){
            console.log(state.contentList)
            this.searchedContent = state.contentList

            //console.log(this.contentList) vuoto
            return
            

        },

        contentPoster (content){
        if(content.poster_path != null){
            return 'https://image.tmdb.org/t/p/w500' + content.poster_path
        } 
        //null non funziona?

        },
        //metodo per voto in stelle da 1 a 5
        voteContent (element) {
        return Math.ceil(element/2)

        }


  },
  

  
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

main{
    background-color: #171717;
}
.card {
    justify-content: space-between;
    max-height: 400px;
    background-color: rgb(42, 42, 41);

    img{
        overflow:hidden;
        height: 100%;

    }

    

    .card_bottom{
        position: absolute;
        opacity: 0;;
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: rgb(42, 42, 41);
        color: white;

        p{
            display: none;
        }

    }

    .card_bottom:hover  {
        opacity: 1;
        background-color: rgb(42, 42, 41);
        overflow: auto;

        p{
            display: inline;
        }


        
    }

}

svg.svg-inline--fa.fa-star {
    color: gold;
}



</style>

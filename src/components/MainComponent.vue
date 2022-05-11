<template>
    <main>
        <button @click="listaContenuti()">listaContenuti</button>

        <div class="container mt-3">
            <div class="row row-cols-3 row-cols-lg-4">
            <div class="col " v-for="(content,index) in searchedContent" :key="index">
                <div class="card mb-3 overflow-auto" >
                <div class="card_top">
                    <img :src="contentPoster(content)" alt="">  
                </div>
                <div class="card_bottom">
                    <h4>{{content.title}}</h4>
                    <h4>{{content.name}}</h4>
                    <p>{{content.media_type}}</p>
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
        searchedContent: []

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

.card {
    justify-content: space-between;
    max-height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.star-empty{
  background-color: goldenrod;
  margin: 2px;
  color:transparent;
  height: 5px;
  width: 5px;
}
.star-full{
  background-color: red;
  height: 5px;
  width: 5px;
  color:transparent;
  margin: 2px;
}

</style>

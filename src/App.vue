<template>
  <div id="app">
    <header>
      <input type="text" v-model="searchInput">

      <!-- al click fai andare una funzione che cerca quello che c'è scritto nel v-model input -->
      <button @click="findContent">Search</button>

    </header>
    <main>
      <div class="container mt-3">
        <div class="row row-cols-3 row-cols-lg-4">
          <div class="col " v-for="(content,index) in contentList" :key="index">
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
                    <flag :iso="content.original_language === 'en' ? 'us' : content.original_language"/>
                  </li>
                  <li>Voto: {{content.vote_average}}</li>
                </ul>
              </div>
            </div>
            
          </div>

        </div>
      </div>


    </main>
    <footer></footer>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {

  },
  data: function (){
      return {
        searchInput: '',
        //mi ci inserice l'input
        contentList: [],

      };
  },
  methods:{
    findContent (){
      axios.get('https://api.themoviedb.org/3/search/multi?api_key=b90e58da8434e9d8b5c5a264bfa4c08d&language=en-US&page=1&include_adult=false&query=' + this.searchInput)
      
      .then((content)=> {
        console.log(content.data.results)
        //ho tutti i contenuti che contengono la parola inserita nell'input
        //creo un'array con film e serie trovati
        this.contentList = content.data.results
        console.log(this.contentList)
      })

    },
    contentPoster (content){
      if(content.poster_path != null){
        return 'https://image.tmdb.org/t/p/w500' + content.poster_path
      } else {
        return 
      }

    }



  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.card {
    justify-content: space-between;
    max-height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

</style>

<template>
  <div id="app">
    <header>
      <input type="text" v-model="searchInput">

      <!-- al click fai andare una funzione che cerca quello che c'è scritto nel v-model input -->
      <button @click="findContent">Search</button>

    </header>
    <main>
      <div class="card"  v-for="(content,index) in contentList" :key="index" >
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

          <!-- promise all. response in posizione 1 e response in posizione 2  -->
          
        </ul>
        
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
        //ho tutti i film che contengono la parola inserita nell'input
        //creo un'array dei film trovati
        this.contentList = content.data.results
        console.log(this.contentList)
      })

    },



  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>

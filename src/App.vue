<template>
  <div id="app">
    <header>
      <input type="text" v-model="searchInput">

      <!-- al click fai andare una funzione che cerca quello che c'è scritto nel v-model input -->
      <button @click="findMovies">Search</button>

    </header>
    <main>
      <div class="card f-flex "  v-for="(movie,index) in movieList" :key="index" >
        <span>{{movie.title}}</span>
        <ul>
          <li>{{ movie.original_title}}</li>
          <li>{{movie.original_language}}</li>
          <li>{{movie.vote_average}}</li>
          

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
        movieList: [],

      };
  },
  methods:{
    findMovies (){
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=b90e58da8434e9d8b5c5a264bfa4c08d&language=en-US&page=1&include_adult=false&query=' + this.searchInput)
      
      .then((movie)=> {
        console.log(movie.data.results)
        //ho tutti i film che contengono la parola inserita nell'input
        //creo un'array dei film trovati
        this.movieList = movie.data.results
        console.log(this.movieList)
      })

    }




  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>

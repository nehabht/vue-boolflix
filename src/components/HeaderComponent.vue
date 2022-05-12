<template>
  <header class="d-flex justify-content-between align-items-center py-2 px-4">
      <div class="logo">
        <img src="https://fontmeme.com/permalink/220512/25934adc80f59e38b5fb31631a98d99f.png" alt="">
      </div>
      <div class="search-option">
        <input type="text" v-model="searchInput" />
        <!-- al click fai andare una funzione che cerca quello che c'è scritto nel v-model input -->
        <button class="btn" @click="search" type="submit">SEARCH</button>
      </div>
      
  </header>
</template>

<script>
import axios from 'axios';
import state from "@/state.js";

export default {
  name: "HeaderComponent",
  components: {},
  data: function () {
    return {
      searchInput: "",
      //mi ci inserice l'input
      contentList: [],
    };
  },
  methods: {
    search() {
      console.log("Searching...");
      console.log(this.searchInput);
      //state.searchInput = this.searchInput;
      //console.log(state.searchInput);
      //state per rederlo disponibile in modo globale, cioè il valore del v-model searchInput viene salvato in state.searchInput
      //chiamata axios
      axios.get('https://api.themoviedb.org/3/search/multi?api_key=b90e58da8434e9d8b5c5a264bfa4c08d&language=en-US&page=1&include_adult=false&query=' + this.searchInput)

      .then((content)=> {
        //console.log(content.data.results)
        //ho tutti i contenuti che contengono la parola inserita nell'input
        //creo un'array con film e serie trovati
        this.contentList = content.data.results
        //console.log(this.contentList)
        state.contentList = this.contentList
        console.log(state.contentList)

      })
    },
   


  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

header{
    height: 60px;
}

.logo{
    img{
        height: 40px;

    }

}
</style>
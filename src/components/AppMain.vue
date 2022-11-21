<script>

import AppCard from './AppCard.vue';
import {store} from '../data/store'

export default {
  name: 'AppMain',
  components:{
    AppCard,
  },
  data(){
      return{
        store
      }
    }
}
</script>

<template>
  <div class="container">
    <div class="row">

      <h2>Film</h2>
      <AppCard 
      v-for="(movie, id) in store.listMovie"
      :key="id"
      :titolo_originale="movie.original_title"
      :image="movie.poster_path"
      :titolo="movie.title"
      :lingua="movie.original_language"
      :voto="movie.vote_average"/>
    </div>

    <div class="row">
      <h2>Serie TV</h2>
      <AppCard 
      v-for="(series, id) in store.listSeries"
      :key="id"
      :titolo_originale="series.original_title"
      :image="series.poster_path"
      :titolo="series.name"
      :lingua="series.original_language"
      :voto="series.vote_average"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .row{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
    h2{
      color: #c1121f;
      padding-bottom: 10px;
    }
  }
</style>
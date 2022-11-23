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
  <div class="section">

    <div class="row"
    v-if="store.listMovie.length > 0">
      <h1>Film</h1>
      <AppCard 
      v-for="(movie, id) in store.listMovie"
      :key="id"
      :titolo_originale="movie.original_title"
      :image="movie.poster_path"
      :titolo="movie.title"
      :lingua="movie.original_language"
      :voto="movie.vote_average"
      :info="movie.overview"/>
    </div>

    <div class="row"
    v-if="store.listSeries.length > 0">
      <h1>Serie TV</h1>
      <AppCard 
      v-for="(series, id) in store.listSeries"
      :key="id"
      :titolo_originale="series.original_title"
      :image="series.poster_path"
      :titolo="series.name"
      :lingua="series.original_language"
      :voto="series.vote_average"
      :info="series.overview"/>
    </div>

    <div class="row"
    v-if="store.popMovie.length > 0">
      <h1>Film in tendenza</h1>
      <AppCard 
      v-for="(movie, id) in store.popMovie"
      :key="id"
      :titolo_originale="movie.original_title"
      :image="movie.poster_path"
      :titolo="movie.name"
      :lingua="movie.original_language"
      :voto="movie.vote_average"
      :info="movie.overview"/>
    </div>

    <div class="row"
    v-if="store.popSeries.length > 0">
      <h1>Serie TV</h1>
      <AppCard 
      v-for="(series, id) in store.popSeries"
      :key="id"
      :titolo_originale="series.original_title"
      :image="series.poster_path"
      :titolo="series.name"
      :lingua="series.original_language"
      :voto="series.vote_average"
      :info="series.overview"/>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.section{
  width: 80%;
  margin: 0 auto;
}
.row{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
    h1{
      color: #c1121f;
      padding-bottom: 20px;
    }
  }
</style>
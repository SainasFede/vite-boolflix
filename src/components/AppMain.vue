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
      :titolo="movie.title"
      :lingua="movie.original_language"
      :voto="movie.vote_average"/>

      <h2>Serie TV</h2>
      <AppCard 
      v-for="(series, id) in store.listSeries"
      :key="id"
      :titolo="series.title"
      :lingua="series.original_language"
      :voto="series.vote_average"/>

    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
<script>

import axios from 'axios'
import { store } from '../src/data/store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components:{
    AppHeader,
    AppMain,
  },
  methods:{
    getMoviePopular(){
      axios.get(store.apiPopMovie, {
        params:{
          language: store.language
        }
      })
      .then(movie => {
        console.log(movie.data.results)
        store.popMovie = [];
        store.popMovie = movie.data.results;
      })
    },
    getSeriesPopular(){
      axios.get(store.apiPopSeries, {
        params:{
          language: store.language
        }
      })
      .then(series => {
        console.log(series.data.results);
        store.popSeries = [];
        store.popSeries = series.data.results;
      })
    },
    getApi(){
      axios.get(store.apiUrlMovie, {
        params:{
          language: store.language,
          query: store.inputUser
        }
      })
      .then(movie => {
      store.listMovie = [];
      store.listMovie = movie.data.results;
      })
      axios.get(store.apiUrlSeries, {
        params:{
          language: store.language,
          query: store.inputUser
        }
      })
      .then(series => {
        store.listSeries = [];
        store.listSeries = series.data.results
      })
    }
  },
  mounted(){
    this.getMoviePopular();
    this.getSeriesPopular();
  }
}
</script>

<template>
  <AppHeader @startSearch='getApi()'/>
  <AppMain />
</template>


<style lang="scss">
  @use './styles/general.scss'
</style>

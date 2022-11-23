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
    startPopular(){
      this.getMoviePopular();
      this.getSeriesPopular();
    },
    getMoviePopular(){
      axios.get(store.apiPopMovie, {
        params:{
          language: store.language
        }
      })
      .then(movie => {
        store.inputUser = '';
        store.popMovie = [];
        store.listMovie = [];
        store.listSeries = [];
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
        store.inputUser = '';
        store.popSeries = [];
        store.listMovie = [];
        store.listSeries = [];
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
      store.inputUser = '';
      store.popSeries = [];
      store.popMovie = [];
      store.listMovie = [];
      store.listMovie = movie.data.results;
      })
      .catch((error) => {
        this.error
      })
      axios.get(store.apiUrlSeries, {
        params:{
          language: store.language,
          query: store.inputUser
        }
      })
      .then(series => {
        store.inputUser = '';
        store.popSeries = [];
        store.popMovie = [];
        store.listSeries = [];
        store.listSeries = series.data.results
      })
      .catch((error) => {
        this.error
      })
    }
  },
  mounted(){
    this.startPopular();
  }
}
</script>

<template>
  <AppHeader @startSearch='getApi()' @backHome="startPopular()" />
  <AppMain />
</template>


<style lang="scss">
  @use './styles/general.scss'
</style>

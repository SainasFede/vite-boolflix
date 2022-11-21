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
    getApi(){
      axios.get(store.apiUrlMovie, {
        params:{
          query: store.inputUser
        }
      })
      .then(movie => {
      console.log(movie.data);
      listMovie = movie.data.results;
      })
      axios.get(store.apiUrlSeries, {
        params:{
          query: store.inputUser
        }
      })
      .then(series => {
        console.log(series.data);
        store.listSeries = series.data.results
      })
    }
  },
  mounted(){
    this.getApi()
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

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
      axios.get(store.apiUrl, {
        params:{
          api_key: store.api_key,
          query: store.inputUser
        }
      })
      .then(result => {
      console.log(result.data);
      result.data = store.resultlist;
      })
      .catch (error => {
      console.log(error);
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

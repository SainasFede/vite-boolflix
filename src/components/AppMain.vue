<script>

import AppCard from './AppCard.vue';
import {store} from '../data/store'

export default {
  name: 'AppMain',
  components:{
    AppCard,
    data(){
      return{
        store
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <AppCard 
      v-for="(movie, id) in store.resultlist.results"
      :key="id"
      :movie="movie"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
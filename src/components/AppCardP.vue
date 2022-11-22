<script>

import StarRating from 'vue-star-rating'


export default {
  name: 'AppCard',
  props:{
    titolo: String,
    titolo_originale: String,
    lingua: String,
    voto: Number,
    introduzione: String,
    image: String,
  },
  components:{
    StarRating
  },
  computed:{
    getImage(){
      if(this.image == null){
        return 'https://www.sicurostore.it/img/sicurostore/sicurostore-immagine-non-disponibile.png'
      }
      return 'https://image.tmdb.org/t/p/w300/'+ this.image;
    },
    getVoto(){
      return this.voto / 2;
    },
    getLanguage(){
      if(this.lingua === 'en') {
        return 'fi fi-' + 'gb';
      }else {
        return 'fi fi-' + this.lingua;
      }
    },
  }
}
</script>

<template>
  <div class="card m-2 p-3" style="width: 18rem;">
    <img :src="getImage" alt="">
    <div class="card-body">
      <h3 class="card-title">{{titolo}}</h3>
      <h5 class="card-title"
      v-if="titolo !== titolo_originale">{{titolo_originale}}</h5>
      <p :class="getLanguage"></p>
      <star-rating :rating="getVoto" increment="0.1" read-only="true" :show-rating="false" star-size="25"></star-rating>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  
</style>
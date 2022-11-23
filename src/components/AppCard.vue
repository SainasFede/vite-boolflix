<script>

import StarRating from 'vue-star-rating'


export default {
  name: 'AppCard',
  props:{
    titolo: String,
    titolo_originale: String,
    lingua: String,
    voto: Number,
    info: String,
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
  <div class="boxCard">
    <img class="img-card" :src="getImage" alt="">
    <div class="box-overlay">
      <h4>{{titolo}}</h4>
      <h6 v-if="titolo !== titolo_originale">{{titolo_originale}}</h6>
      <p class="flag" :class="getLanguage"></p>
      <star-rating :rating="getVoto" increment="0.1" read-only="true" :show-rating="false" star-size="15"></star-rating>
      <p class="info">{{info}}</p>
    </div>
    
  </div>
</template>


<style lang="scss" scoped>
  .boxCard{
    position: relative;
    width: calc(100% / 4);
    margin-bottom: 20px;
    border-radius: 5px;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .box-overlay{
    padding: 10px;
    backdrop-filter: blur(8px);
    position: absolute;
    top: 0;
    left: 10px;
    width: calc(100% - 22px);
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.65s;
    &:hover{
      opacity: 1.5;
      border: 2px solid #fcbf49;
      border-radius: 5px;
    }
  }
  .flag{
    padding-top: 20px;
  }
  .info{
    margin-top: 10px;
    font-size: 13.5px;
    padding: 5px;
    text-align: justify;
  }
</style>
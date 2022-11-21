<script>

export default {
  name: 'AppCard',
  props:{
    titolo: String,
    titolo_originale: String,
    lingua: String,
    voto: Number,
    introduzione: String,
    image: String
  },
  computed:{
    getImage(){
      return 'https://image.tmdb.org/t/p/w300/'+ this.image;
    }
  }
}
</script>

<template>
  <div class="card m-2 p-3" style="width: 18rem;">
  <img :src="getImage" alt="">
  <div class="card-body">
    <h3 class="card-title">{{titolo}}</h3>
    <h5 class="card-title">{{titolo_originale}}</h5>
    <p>lingua: {{lingua}}</p>
    <p>voto: {{voto}}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>
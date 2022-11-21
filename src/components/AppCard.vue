<script>



export default {
  name: 'AppCard',
  props:{
    movie: Object,
  }
}
</script>

<template>
  <div class="card m-2 p-3" style="width: 18rem;">
  <img >
  <div class="card-body">
    <h5 class="card-title">{{movie.title}}</h5>
    <p>{{movie.original_language}}</p>
    <p>{{movie.vote_avarage}}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>
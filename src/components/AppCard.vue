<script>

export default {
  name: 'AppCard',
  props:{
    titolo: string,
    lingua: string,
    voto: number,
    introduzione: string
  }
}
</script>

<template>
  <div class="card m-2 p-3" style="width: 18rem;">
  <img >
  <div class="card-body">
    <h5 class="card-title">titolo: {{titolo}}</h5>
    <p>lingua: {{original_language}}</p>
    <p>voto: {{vote_avarage}}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>
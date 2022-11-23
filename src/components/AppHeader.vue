<script>

import { store } from '../data/store'

export default {
  name: 'AppHeader',
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <header>
    <div class="intro">

      <div class="logo">
        <img src="../assets/img/logo-boolflix.png" alt="">
      </div>

      <div class="search d-flex">
        <div class=""><button type="button" @click="$emit('backHome')" class="btn btn-danger btn-text-whi">Home</button></div>
        <div class="search">
          <input @keyup.enter="$emit('startSearch')" v-model.trim="store.inputUser" type="text" class="form-control" id="userSearch" placeholder="Cerca un film o una serie">
        </div>
        </div>
      </div>
  </header>
</template>


<style lang="scss" scoped>
header{
  margin-bottom: 20px;
}
.intro{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search{
  margin-left: 10px;
}
  .logo{
    width: 150px;
    height: 40px;
    margin: 5px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
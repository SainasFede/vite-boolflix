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
    <div class="row">

      <div class="logo">
        <img src="../assets/img/logo-boolflix.png" alt="">
      </div>

      <div class="search col-4 d-flex">
          <div class="col-8 px-2">
            <input @keyup.enter="$emit('startSearch')" v-model="store.inputUser" type="text" class="form-control" id="userSearch" placeholder="search">
          </div>
        <div class="col-4">
          <select id="inputState" class="form-select">
            <option selected>Seleziona categoria</option>
            <option value="serie tv">Film</option>
            <option value="serie tv">Serie TV</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header{
  margin-bottom: 20px;
}
.row{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .logo{
    width: 150px;
    height: 30px;
    margin: 5px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
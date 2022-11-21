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

    <div class="logo">
      
    </div>

    <div class="search">
      <div class="row">
        <div class="col-10">
          <input @keyup.enter="$emit('startSearch')" v-model="store.inputUser" type="text" class="form-control" id="userSearch" placeholder="search">
        </div>
      <div class="col-2">
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

</style>
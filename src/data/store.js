import { reactive } from 'vue';

export const store = reactive({
  apiUrl : 'https://api.themoviedb.org/3/search/movie',
  api_key: 'e02fab18056083eaacef7bf9ef06b5c7',
  inputUser: '',
  resultlist:[]
})
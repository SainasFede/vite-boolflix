import { reactive } from 'vue';

export const store = reactive({
  apiUrlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=e02fab18056083eaacef7bf9ef06b5c7',
  apiUrlSeries:'https://api.themoviedb.org/3/search/tv?api_key=e02fab18056083eaacef7bf9ef06b5c7',
  apiPopMovie: 'https://api.themoviedb.org/3/movie/popular?api_key=e02fab18056083eaacef7bf9ef06b5c7',
  apiPopSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=e02fab18056083eaacef7bf9ef06b5c7',
  language: 'it-IT',
  inputUser: '',
  listMovie:[],
  listSeries:[],
  popMovie:[],
  popSeries:[],
  error: 'Nessun Risultato Trovato'
})
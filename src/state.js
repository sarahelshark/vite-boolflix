import  {reactive} from 'vue'


export const state = reactive ({
/**reactive object- global state  */
    api_url:"https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=b8a3cc58e76a00cf47574cfa4f055fb3",
    query: 'b',
    language:`it-IT`,
    api_key:`b8a3cc58e76a00cf47574cfa4f055fb3`,
    img_prefix: `https://image.tmdb.org/t/p/w200/`,
  
},
)

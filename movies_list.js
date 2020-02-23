
Vue.component('movie-list',{
  props:['title','image','id','year','Type'],
  template:`<li>
                <div>
                    <p>Title:{{title}}</p>
                    <img :src="image"><br>
                    <p>Imdb:{{id}}</p>
                    <p>Year : {{year}}</p>
                    <p>Type : {{Type}}</p>
                </div>
            </li>`,
});
new Vue({
  el:"#ele",
  data:{
    title:'',
    poster:'',
    Type:'',
    yr:'',
    imdbID:'',
    msg:[]
  },
 created(){
    axios.get("http://www.omdbapi.com/?s=harry+potter&apikey=e0620bd4").then(res => this.msg =res.data.Search);
  },
  methods:{
       add(){
         this.msg.push({
            Title:this.title,
            Poster:this.poster,
            Type:this.Type,
            Year:this.yr,
            imdbID:this.imdbID
        });
        this.name='';
        this.poster='';
        this.yr='';
        this.imdbID='';
        this.Type="";
      },
  }
})

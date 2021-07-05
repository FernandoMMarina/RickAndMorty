const app = new Vue({
    el: '#app',
    data: {
        info: {},
        results: [],
        errored:false,
        loading:true
    },
    created() {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data.info;
            this.results=data.results;
            this.loading=false
            })
        .catch( error =>  this.errored=true   );
    },
   function(){
       
   }
});



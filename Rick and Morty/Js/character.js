const app = new Vue({
    el: '#app',
    data: {
        info: {},
        results: [],
        errored:false,
        loading:true
    },
    created() {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data.info;
            this.results=data.results;
            this.loading=false
            })
        .catch( error =>  this.errored=true   );
    },

});

function navegacion (){

    app.created();{
        fetch('https://rickandmortyapi.com/api/character?page=2')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data.info;
            this.results=data.results;
            this.loading=false
            })
        .catch( error =>  this.errored=true   );
    };

}


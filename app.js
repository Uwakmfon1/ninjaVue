const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
             books:[
                {title:'The Hundlers',author:'King Waldron', year:'2011'},
                {title:'The Search for the Sapphire',author:'King Waldron', year:'2015'},
                {title:'Tales of the Elmas',author:'John Gippins', year:'2013'}
            ],
            title: 'She Stoops to Conquer',
            author: 'Othello',
            age: 27,
            spanTitle: "Hide Books",   
            x:0,
            y:0,       
        }
    },

   
    methods: {
        changeTitle() {
            let newTitle = prompt('Enter new title');
            this.title = newTitle
        },

        hideBooks() {
            this.showBooks = !this.showBooks;
            this.spanTitle =  this.spanTitle==="Hide Books" ? "Show Books":"Hide Books"
        },

        handleEvent(e, data){
            console.log(e, e.type);
            if(data){
                console.log(data);               
            }
        },

        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');
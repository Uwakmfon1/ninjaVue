const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books:[
                {title:'The Alchemist', author:'Paulo Coelo', year:'1988', image:"assets/img/alchemist.jpeg", isFav:false},
                {title:'Adventures of Huckleberry Finn', author:'Mark Twain', year:'1884', image:"assets/img/huckleBerry.jpeg", isFav:true},
                {title:'Normal People', author:'Sally Rooney', year:'2018', image:"assets/img/normalPeople.jpeg", isFav:false}
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
        },

        toggleIsFav(e){
            e.isFav = !e.isFav;                          
        }
    },
    
    computed: {
        filteredBooks(){
            return this.books.filter((book)=> book.isFav);
        }
    }
});

app.mount('#app');
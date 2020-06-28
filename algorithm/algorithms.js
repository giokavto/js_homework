function Graph(v){
    this.vertices = v;    //vertices ვუტოლებთ პარამეტრ v-s
    this.edges = 0;       //კიდეების საწყის ეტაპზე არის 0
    this.adj = [];        // ეჯისონი პირველ ეტაპზე არის ცარიელი მასივი  
    for(let i = 0; i < this.vertices; i++){  
        this.adj[i] = [];       /// adj[i] ვუტოლებთ ცარიელ მასივს
        this.adj[i].push("");   //////// adj[i] ვაწვდით ცარიელ მნიშვნელობას, და ვიღებთ საწყის გრადიკულ კლასს
    }
    this.addEdge = addEdge;    /// ამ ფუნქციებს ქვემოთ აღვწერთ
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];  /// უნდა ვნახოთ რომელი ნიშნებია დაფიქსირებული, და პირველ რიგში ვიღებთ ცარიელ მასივს, ამის შემდეგ დავატრიალებთ ფორ ციკლს
    for(let i = 0; i < this.vertices; i++){
        this.marked[i] = false;
    }

}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;   /// კიდების გაზრდით ვიწყებთ სიღმისეული ძიების ალგორითმს
}

function showGraph(){
    for(let i = 0; i < this.vertices; i++){
        console.log(i + " => "); // ამით ვიღებთ მარყუჟს სადაც იქნება თითოეული კვანძი
        for(let j = 0; j < this.vertices; j++){
            if(this.adj[i][j]!=undefined) /// თუ i და j არ არის განუსაზღვრელუ 
            console.log(this.adj[i][j]+ ""); /// უნდა დაბეჭდოს ყველა მიმდინარე მატრიცის მნიშვნელობა (ანუ კიდეები) ცარიელი სტრიქონებით, ეს არის ამ ფუნქციის უმთავრესი ნაწილი
        }
        console.log();
    }
}

function dfs(v){
    this.marked[v] = true; //აღნიშნავს ყველაფერს რაც ვერტიკალურია
    if(this.adj[v] !=undefined){    /// ამოწმებს თუ პარამეტრი განსაზღვრულია და დაცულია
        console.log("Visited Vertex: " +v); /// მივიღებთ სტრინგ  "Visited Vertex: " პლიუს ვ (როგორც კონსოლ ლოგშია ნაჩვენები)
    }

    let w = "";
    for( w in this.adj[v]) {   //// მეორეს მხრივ დაბეჭდავს: მოუწოდებს თითოეულ მარყუჟს, 
        if(!this.marked[w]){
            this.dfs(w);
        }
    }
}


//////////// შეგვიძლია განვიხილოტ ბეჭდვის მაგალითი

g= new Graph(6);

g.addEdge(0,1);
g.addEdge(0,4);
g.addEdge(0,5);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,5);
g.showGraph();
g.dfs(0);













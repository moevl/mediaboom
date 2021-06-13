let ejs = require('ejs');
let fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://van:nhaidepxop@cluster0.z2fgd.mongodb.net/mockWebData?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try {
        await client.connect();       
        const collection = await client.db("mockWebData").collection("news");
        const arr = await collection.find().toArray();
               
        
        ejs.delimiter = '?';
        const data = {
            news: arr
        };
        ejs.renderFile('templates/index.ejs', data, null, function (err, str) {
            if (err)  throw err;
            fs.writeFileSync("index.html", str);
        });
                
    } finally{
        client.close();
    }
    
}

run().catch(console.log);

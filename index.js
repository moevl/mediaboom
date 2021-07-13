let ejs = require('ejs');
let fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://van:nhaidepxop@cluster0.z2fgd.mongodb.net/mockWebData?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try {
        await client.connect();       
        const db = await client.db("mockWebData");
        const newsCollection = await db.collection("news");
        const news = await newsCollection.find().toArray();
        const featuresCollection = await db.collection("features");       
        const features = await featuresCollection.find().toArray();
        const slideCol = await db.collection("slideshow").find('beach').toArray();
        const slides = slideCol[0].beach;
        const bestExamplesCol = await db.collection("best-examples");       
        const bestExamples = await bestExamplesCol.find().toArray();
        const testimonialsCol = await db.collection("testimonials");       
        const testimonials = await testimonialsCol.find().toArray();
        
        ejs.delimiter = '?';
        const data = {
            news, features, slides,bestExamples, testimonials
        };
        ejs.renderFile('ejs/index.ejs', data, null, function (err, str) {
            if (err)  throw err;
            fs.writeFileSync("index.html", str);
        });
                
    } finally{
        client.close();
    }
    
}

run().catch(console.log);

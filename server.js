const express = require('express');
const http = require("http")
const fs = require("fs")
const cors = require('cors')
const {json} = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });   // или memoryStorage
//const {console} = require("yarn/lib/cli");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/"
let balsalm


const client = new MongoClient(url);
//const db = client.db("logindb")
    //const coll1 = db.collection("logindata")

async function getarticles(response) {
    try {
        await client.connect();
        //console.log("Подключение установлено");
        const db = client.db("login");
        const collection = db.collection("postdata");
       // await collection.drop()
        const resulttech = await collection.find({section: "tech"}).toArray()
        let o1 = 0
        for(let tech1 of resulttech) {
            tech1.id = o1
            o1++
        }
        const resultpolitics = await collection.find({section: "politics"}).toArray()
        let o2 = 0
        for(let politics1 of resultpolitics) {
            politics1.id = o2
            o2++
        }
        const resultsports = await collection.find({section: "sports"}).toArray()
        let o3 = 0
        for(let sports1 of resultsports) {
            sports1.id = o3
            o3++
        }
        const resultart = await collection.find({section: "art"}).toArray()
        let o4 = 0
        for(let art1 of resultart) {
            art1.id = o4
            o4++
        }
        const resultnature = await collection.find({section: "nature"}).toArray()
        let o5 = 0
        for(let nature1 of resultnature) {
            nature1.id = o5
            o5++
        }
        const resultother = await collection.find({section: "other"}).toArray()
        let o6 = 0
        for(let other1 of resultother) {
            other1.id = o6
            o6++
        }
       // const categories = new Map();
        response.send({'tech': Array.from(resulttech), 'politics': Array.from(resultpolitics), 'sports': Array.from(resultsports), 'art': Array.from(resultart), 'nature': Array.from(resultnature), 'other': Array.from(resultother)})
    }catch(err) {
        console.log(err);
    } finally {
        await client.close();
        //console.log("Подключение закрыто")
    }
}

async function run(informa) {
    try {
        await client.connect();
        console.log("Подключение установлено");
        const db = client.db("login");
        const collection = db.collection("logindata");
        const result2 = await collection.findOne(informa)
        const logline = {login: informa.login}
        if (result2) {
            let ggs = await db.collection('logindata').deleteMany(logline);
            console.log(ggs)
            const result = await collection.insertOne(informa);
            console.log(result)
        } else {
            const result = await collection.insertOne(informa);
            console.log(result)
        }
    }catch(err) {
        console.log(err);
    } finally {
        await client.close();
        console.log("Подключение закрыто")
    }
}

async function checkimage(informa) {
    try {
        await client.connect();
        const db = client.db("login");
        const collection = db.collection("logindata");
        //db.collection.drop()
        //let ggs = await db.collection('logindata').deleteMany({ login: 'wew999' });
        //console.log(ggs)
        const result2 = await collection.findOne(informa)
        console.log(result2)
        balsalm = result2.file
        console.log(balsalm)
    }catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
}


async function run2(informa) {
    try {
        await client.connect();
        console.log("Подключение установлено");
        const db = client.db("login");
        const collection = db.collection("postdata");
        const result = await collection.insertOne(informa);
        const result2 = await collection.findOne(informa)
        console.log(result)
        console.log(result2)
    }catch(err) {
        console.log(err);
    } finally {
        await client.close();
        console.log("Подключение закрыто")
    }
}


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Помните, использование звёздочек в качестве маски может быть рискованным.
    next();
});
app.post("/log", upload.single('image'), function(request, response){
    console.log('Текстовые данные:', request.body.json);
    reque = request.body.json
    requef = request.file
    const data = JSON.parse(request.body.json);
    console.log('Файл получен:', request.file)
    response.send('OK');
    run(reque)
    //console.log(data)
    //response.send(data);
});

app.post("/blogpost", function(request, response){
    let data = ''
    request.on("data", chunk => {
        data += chunk;
    });
    request.on("end", () => {
        console.log(data)
        tdata = JSON.parse(data)
        run2(tdata).catch(console.log)
        response.send(tdata)
    });

    //console.log(data)
    //response.send(data);
});
app.post("/logimg", function(request, response){
    let data = ''
    request.on("data", chunk => {
        data += chunk;
    });
    request.on("end", () => {
        console.log(data)
        data = JSON.parse(data)
        checkimage(data)
        response.send(balsalm)
    });
});
app.get("/blogposter", function(request, response){
    getarticles(response).catch(console.log)
    //console.log(data)
    //response.send(data);
});
app.get("/log", function(_, response){
    response.sendFile(__dirname + '/index.html');
});
app.get("/main", function(_, response){
    response.sendFile(__dirname + '/index.html');
});
app.get("/textf", function(_, response){
    response.sendFile(__dirname + '/textfield.html');
});
app.get("/logredir", function(_, response){
    response.sendFile(__dirname + '/login.html');
});
app.get("/accredir", function(_, response){
    response.sendFile(__dirname + '/account.html');
});
app.get("/sectt", function(_, response){
    response.sendFile(__dirname + '/sectionf.html');
});

app.listen(3000);
console.log("Запущено")
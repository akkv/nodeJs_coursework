const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const secret = 'h652iu4h6i4u753967357oi&*%&*%34hy7jg23'
client.connect()
    .then(()=>{
        const db = client.db('courses_shop');
        const collection = db.collection('users');
        collection.insertOne({
            login: 'user1',
            pass: crypto.createHash('sha256')
                .update(secret + 'user1')
                .digest('hex')
        }).then(()=>{
            console.log('Админ добавлен!')
        })
    })
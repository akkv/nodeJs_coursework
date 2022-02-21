const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

exports.init = async function () {
    await client.connect();
};
exports.getAllCourses = async function () {
    const db = client.db('courses_shop');
    const collection = db.collection('courses');
    return await collection.find().toArray();
};
exports.getAllNews = async function () {
    const db = client.db('courses_shop');
    const collection = db.collection('news');
    return await collection.find().toArray();
};
exports.getUser = async function (login) {
    const db = client.db('courses_shop');
    const collection = db.collection('users');
    return await collection.find({ login }).toArray();
};
exports.getAllStudents = async function (login) {
    const db = client.db('courses_shop');
    const collection = db.collection('students');
    return await collection.find().toArray();
};
exports.addStudent = async function (data) {
    const db = client.db('courses_shop');
    const collection = db.collection('students');
    return await collection.insertOne(data);
};
exports.addCourse = async function (data) {
    const db = client.db('courses_shop');
    const collection = db.collection('courses');
    return await collection.insertOne(data);
};
exports.addNews = async function (data) {
    const db = client.db('courses_shop');
    const collection = db.collection('news');
    return await collection.insertOne(data);
};
exports.deleteCourse = async function (id) {
    const db = client.db('courses_shop');
    const collection = db.collection('courses');
    return await collection.deleteOne({ _id: ObjectId(id) });
};
exports.deleteNews = async function (id) {
    const db = client.db('courses_shop');
    const collection = db.collection('news');
    return await collection.deleteOne({ _id: ObjectId(id) });
};
exports.deleteStudent = async function (id) {
    const db = client.db('courses_shop');
    const collection = db.collection('students');
    return await collection.deleteOne({ _id: ObjectId(id) });
};
exports.editStatus = async function (id) {
    const db = client.db('courses_shop');
    const collection = db.collection('students');
    return await collection.updateOne({ _id: ObjectId(id) }, { $set: { answer: true } });
};

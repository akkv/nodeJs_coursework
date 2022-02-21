const express = require('express');
const app = express();
const db = require('./models/courses.js');

// const { Telegraf } = require('telegraf');
// const bot = new Telegraf('5285053929:AAFYiJ-Mg-x5BYKySWhSsMRBa8blx-fj1GM');
// const chatId = 320410084;

const sendMail = require('./mail.js');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');
const inner_secret = 'h652iu4h6i4u753967357oi&*%&*%34hy7jg23';

app.use(express.static('public'));

db.init().then(() => {
    console.log('DB OK!');
    app.listen(80, () => {
        console.log('Server is run!');
    });
});
app.get('/all_courses', (rea, res, next) => {
    db.getAllCourses()
        .then((arr) => {
            res.json(arr);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});
app.get('/all_news', (req, res, next) => {
    db.getAllNews()
        .then((arr) => {
            res.json(arr);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});
app.get('/all_students', (req, res, next) => {
    db.getAllStudents()
        .then((arr) => {
            res.json(arr);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});
app.post('/send_form', express.json(), async (req, res, next) => {
    req.body.answer = false;
    await db.addStudent(req.body);
    res.status(200).end();
});
app.post('/delete_course', express.json(), async (req, res, next) => {
    await db.deleteCourse(req.body.id);
    res.status(200).end();
});
app.post('/delete_news', express.json(), async (req, res, next) => {
    await db.deleteNews(req.body.id);
    res.status(200).end();
});
app.post('/delete_student', express.json(), async (req, res, next) => {
    await db.deleteStudent(req.body.id);
    res.status(200).end();
});
app.post('/edit_student_status', express.json(), async (req, res, next) => {
    await db.editStatus(req.body.id);
    res.status(200).end();
});
app.post('/add_news', express.json(), async (req, res, next) => {
    await db.addNews(req.body);
    res.status(200).end();
});
app.post('/add_course', express.json(), async (req, res, next) => {
    await db.addCourse(req.body);
    res.status(200).end();
});
app.post('/send_mail', express.json(), (req, res, next) => {
    sendMail(req.body.email)
        .then(() => {
            res.status(200).end();
        })
        .catch((err) => {
            console.log(err);
        });
});

// auth
app.use(
    session({
        secret: 'uigh6ih3i3iu34h5634698456*(&(*&',
        cookie: {
            maxAge: 600000000,
            httpOnly: false,
        },
        resave: true,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/courses_shop' }),
    })
);

app.post('/auth', express.json(), async (req, res, next) => {
    let data = req.body;
    if (!data.login || !data.pass) return res.status(400).end();
    let users = await db.getUser(data.login);

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.login == data.login) {
            let hashed_pass = crypto
                .createHash('sha256')
                .update(inner_secret + data.pass)
                .digest('hex');
            if (hashed_pass == user.pass) {
                req.session.user_name = user.login;
                req.session.auth = true;
                return res.status(200).end();
            } else {
                req.session.auth = false;
                return res.status(401).end();
            }
        }
    }
    req.session.auth = false;
    return res.status(401).end();
});

app.use((req, res, next) => {
    if (req.url.startsWith('/admin')) {
        if (req.session.auth) {
            next();
        } else {
            res.redirect('/');
        }
    } else {
        next();
    }
});
app.use(express.static('private'));

app.get('/exit', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
});

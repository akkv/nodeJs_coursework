const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');
const inner_secret = 'h652iu4h6i4u753967357oi&*%&*%34hy7jg23';
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
app.post('/auth', express.json(), async (req, res, next) => {
    let data = req.body;
    if (!data.login || !data.pass) return req.status(400).end();
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
app.get('/exit', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
});
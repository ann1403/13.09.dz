const { Router } = require('express');
const router = Router();
const fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./index.pug');
});
router.post("/", function(req, res, err) {
    if (req.body.name == ' ') {
        res.send('Noname, Write your name!')
    } else if (typeof(req.body.name) == 'string') {
        if (req.body.name.length < 4) {
            res.send('Too small name! 4-32')
        } else if (req.body.name.length > 32) {
            res.send('Too big name! 4-32')
        } else {
            if (!/^[a-zA-Z0-9]+$/.test(req.body.name)) {
                res.send('Write your name without symbols!')
            } else {
                console.log('Name')
            };
        };
    } else {
        res.send('Your name is not good! Write your name!')
    };
    if (req.body.username == ' ') {
        res.send('Nousername, Write your username!')
    } else if (typeof(req.body.username) == 'string') {
        if (req.body.name.length < 4) {
            res.send('Too small username! 4-12')
        } else if (req.body.username.length > 12) {
            res.send('Too big username! 4-12')
        } else {
            if (!/^[a-zA-Z0-9]+$/.test(req.body.username)) {
                res.send('Write your username without symbols!')
            } else {
                console.log('username')
            };
        };
    } else {
        res.send('Your username is not good! Write your username!')
    };
    if (req.body.pwd == ' ') {
        res.send('Nopwd, Write your pwd!')
    } else if (typeof(req.body.pwd) === 'string') {
        if (req.body.pwd.length < 6) {
            res.send('Too small pwd! 6-20')
        } else if (req.body.pwd.length > 20) {
            res.send('Too big pwd! 6-20')
        } else {
            if (!/^[a-zA-Z0-9]+$/.test(req.body.pwd)) {
                res.send('Write your pwd without symbols!')
            } else {
                for (let i = 0; i < req.body.pwd.length; i++) {
                    if (req.body.pwd[i] !== /[A-Z]/) {
                        res.send('Your pwd must be have with A-Z')
                    } else {
                        console.log('Good!')
                    }
                }
                for (let k = 0; k < req.body.pwd.length; k++) {
                    if (req.body.pwd[k] !== /[0-9]/) {
                        res.send('Your pwd must be have with 0-9')
                    } else {
                        console.log('Good!')
                    }
                }
                console.log('Pwd')
            };
        };
    } else {
        res.send('Your pwd is not good! Write your pwd!')
    };

    let data = JSON.stringify(req.body);
    console.log(data);
    res.send('It`s ok! Your data: ' + data);
});

module.exports = router;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const dbURI = "mongodb://localhost:27017/School";
const { User } = require("./model");
mongoose.set('strictQuery', false);

var allowList = ["http://localhost:3000"];





app.get('/getAllUsers', (req,res) => {
    User.find({})
    .then((data)=> {
    res.send(data);
})
    .catch((err) => console.log(err));
});


app.post('/adduser', (req,res) => {
    const {
        userName,
        userDept,
        userEmail,
        userPassword,
        userGender,
        userAddress,
        userStatus,
    } = req.body;

    let userData = {
        name: userName,
        Dept: userDept,
        email: userEmail,
        password: userPassword,
        gender : userGender,
        Address : userAddress,
        status : userStatus,
    };

    console.log(userData);

    User.create(userData) 
    .then((data) => {
        res.send({
            data,
            success: true,
            message: "Successfull created the database",
            
    });
    })
    .catch((err) => console.log(err));
});

app.post('/userlogin', (req,res) => {
    const {userEmail, userPassword} = req.body;
    User.find({email: userEmail})
    .then((data) => {
        if(data.length == 0) {
            res.send({
                access: false,
                message: "user not found"
            });
        }
        if(data.length > 0) {
            if(data[0].password == userPassword) {
                res.send({
                    access: true,
                    message: "user login successfull"
                });
            }
            else{
                res.send({
                    access: false,
                    message : "invalid password"
                });
            }
        }
    })
    .catch((e) => console.log(e));
})

app.delete('/deleteUser',(req,res) => {
    let id = req.body.userid;
    console.log(`delete id`, id);

    User.deleteOne({_id : id })
    .then((data) => {
        res.send({
            success : 'true',
            message : 'deleted successfully'
    });
    })
    .catch((err) => {
        res.send({
            success : 'false',
            message : 'network error'
        })
    });
});

app.post('/resetpassword',(req,res) => {
    let id = req.body.id;
    let password = req.body.password
    User.findByIdAndUpdate(id, {password: password})
    .then((data) => {
        res.send({
            success: true,
            message: "password changed"
        })
    })
    .catch((e) => {
        res.send({
            success: false,
            message: "network error"
        })
    });
})

app.listen(5000, () =>{
    console.log('my server has started at the port');
    mongoose
    .connect(dbURI,{useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('db connected'))
    .catch((e) => console.log(e));
});



var express = require("express");
var cors = require("cors");
const mongoose = require('mongoose');
// const Account = require('./models/accounts')
// APP.models = require('./models');
const multer = require('multer');
const upload = multer();
const Lab = require('./models/lab')
const Problem = require('./models/problem')
const Testcase = require('./models/testcase')
const Teacher = require('./models/teacher')
const Student = require('./models/student')

mongoose.connect('mongodb://localhost:27017/labChanaServer', {
    useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

// สร้าง express เพื่อทำ path
var app = express();

// ทำให้ดึง uri ไปใช้งานได้
app.use(express.urlencoded());

// สร้าง server port
var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("[success] task 1 : listening on port " + port);
});

// ข้อความสำหรับ path หน้าแรกของ express เรา (localhost:5000/)
app.get("/", (req, res) => {
    res.status(200).send("main page");
});

// path แบบมี parameter
app.get('/api/account/:id', async (req, res) => {
    const { id } = req.params
    // const account = accounts.find(account => account.id === id)
    const account = await Account.findOne({ id: id })
    res.status(200).send(account);
});

app.get("/api/getAllAccounts", async (req, res) => {
    const accounts = await Account.find({})
    res.status(200).send(accounts);
});

app.post('/api/account', async (req, res) => {
    const payload = req.body
    const account = new Account(payload)
    await account.save()
    res.status(201).send(req.body)
})

app.post('/api/test', (req, res) => {
    res.status(201).send(req.body)
    // const payload = req.body
    // const account = new Account(payload)
    // await account.save()
})

app.put('/api/deposite/', async (req, res) => {
    const account = await Account.findOne({ id: req.body.id });
    account.balance += parseFloat(req.body.balance);
    res.status(200).send(account);
    Account.findByIdAndUpdate(account._id, account, (err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(account);
    });

})

app.delete('/api/account/:id', async (req, res) => {
    const { id } = req.params
    await Account.findOneAndDelete({ id: id })
    res.status(204).send("deleted")
})

app.get('/api/getAllLab', async (req, res) => {
    const lab = await Lab.find({})

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.status(200).send(lab);
});

app.post('/api/addLab', upload.none(), async (req, res) => {
    const formData = req.body;
    console.log('form data', formData);
    // const payload = req.body
    // const lab = new Lab(payload)
    // await lab.save()
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.status(201).send(req.body)
})

// ข้อความสำหรับใส่ path ผิด (localhost:5000/asdfghjkl;)
app.use((req, res, next) => {
    var err = new Error("can't find");
    err.status = 404;
    next(err);
});
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3001;
const MONGO_STRING = process.env.MONGO_STRING;
const methodOverride = require('method-override');
const Provider = require('./models/provider.js');

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

mongoose.connect(MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
mongoose.connection.on('error', (err) => {
    console.logt(err.message);
})
mongoose.connection.on('dissconnected', () => {
    console.log('MonNO');
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
app.get('/', (req, res) => {
    res.send('Hello World');
})

//Index


app.listen(PORT, () => {
    console.log(`currently on port ${PORT}`);
})
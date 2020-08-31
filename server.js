const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgon = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

//routes

const blogRoutes = require('./Routes/BlogRoutes')
const authRoutes = require('./Routes/authRoutes')
const userRoutes = require('./Routes/userRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')
const tagRoutes = require('./Routes/tagRoutes')
const formRoutes = require('./Routes/formRoutes')

//app

const app = express();

//database

mongoose.connect(process.env.DATABASE , {useNewUrlParser: true , useCreateIndex: true , useFindAndModify: false , useUnifiedTopology: true})
        .then(() => console.log('DB connected'))

//middle ware

app.use(morgon('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware

app.use('/api' , blogRoutes);
app.use('/api' , authRoutes);
app.use('/api' , userRoutes);
app.use('/api' , categoryRoutes);
app.use('/api' , tagRoutes);
app.use('/api' , formRoutes);

//cors

if(process.env.NODE_ENV == 'production'){
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}


// set static folder

app.use(express.static('client/build'))

// index.html

app.get('*' , (req , res) => {
    res.sendFile(path.resolve(__dirname , './client' , 'build/server/pages' , 'signin.html'))
})

//listen

const port = process.env.PORT || 8000

app.listen(port , ()=>{
    console.log(`server is started on port ${port}`);
})

import express from "express";
import routes from './src/routes/crmRoutes';
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))


routes(app);

const PORT = 3000;

app.get('/',(req,res) => {
    res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT,() => {
    console.log(`Your server running on port ${PORT}`)
})
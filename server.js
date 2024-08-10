require("dotenv").config();
const cors = require("cors");
const { PORT } = process.env;
const express = require("express");
const app = express();
const routes = require('./routes/index')

app.use(cors({
    origin: 'https://listycomovielist.netlify.app'
}));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/', routes) 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

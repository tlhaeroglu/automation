const PORT = 4000;
const HOST = "*";

import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static(path.join(path.resolve(), "/public/")));
app.use(cors({ origin: HOST, optionsSuccessStatus: 200 }));
router.map((route) => {
  app.use(route);
})

const conectionString = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.vtlhiio.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(conectionString, (e)=>{
    if(e){
        console.log(e);
    }else{
        console.log('Connected to database');
    }
});


app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});

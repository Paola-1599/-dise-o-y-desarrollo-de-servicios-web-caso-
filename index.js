// index.js
import express from 'express'
import { Login } from './controller/Login.js';
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());
const PORT = 4000;



app.listen(PORT, ()=>{
  console.log('server on puerto 4000') 
});


app.post('/usuarios', (req, res) =>{
     res.json()
});

app.post('/login', Login);





import {db} from './connect.js';
import express from 'express';
import cors from 'cors';
import {PORT} from './config.js';
const app=express();

app.use(cors());
app.use(express.json());

app.post('/create',(req,res)=>{
    
})
app.get('/',(req,res)=>{
    db.query('SELECT * FROM persona',(err,resul)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            console.log(resul)
            res.send(resul)
        }
    })
})

app.listen(PORT,()=>{
    console.log('YEY, RUNNING IN PORT: '+PORT)
})

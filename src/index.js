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
    // db.query('SELECT * FROM persona',(err,resul)=>{
    //     if(err){
    //         res.send(err);
    //         console.log(err);
    //     }else{
    //         console.log(resul)
    //         res.send(resul)
    //     }
    // })
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    db.query('delete from persona where id=?;',
    id,
    (err,resul)=>{
        if(err){
            res.send(err)
        }else{
            res.send(resul)
        }
    })
})
app.put('/create/:id',(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    const apellido=req.body.apellido;
    const edad=req.body.edad;
    const telefono=req.body.telefono;
    const foto=req.body.foto;
    db.query(`update persona set name=?,apellido=?,edad=?,telefono=?,foto=? where id=${id};`,
    [name,apellido,edad,telefono,foto,id],
    (err,resul)=>{
        if(err){
            console.log(err)
        }else{
            res.send(resul)
        }
    })
})

app.get('/perfil/:id',(req,res)=>{

    const id=req.params.id

    db.query(`select * from persona where id=${id}`,id,(err,resul)=>{
        if(err){
            res.send(err)
        }else{
            res.send(resul)            
        }
    })
})
app.post('/add',(req,res)=>{
    const name=req.body.name;
    const apellido=req.body.apellido;
    const edad=req.body.edad;
    const telefono=req.body.telefono;
    const foto=req.body.foto;
    db.query('INSERT INTO persona(name,apellido,edad,telefono,foto)VALUES(?,?,?,?,?)',
    [name,apellido,edad,telefono,foto],
    (err,resul)=>{
        if(err){
            res.send(err)
        }else{
            res.send(resul)
        }
    })
})

app.listen(PORT,()=>{
    console.log('YEY, RUNNING IN PORT: '+PORT)
})

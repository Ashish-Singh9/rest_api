import express from 'express';

import userRoutes from './routes/user.js'

const app =express();
const PORT= 5000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.end("hello");
});
app.listen(PORT,()=>{
    console.log(`Server Running on port: http://localhost:${PORT}`);
});
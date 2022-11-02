const express=require('express');
const cors=require('cors');
const app=express();
const chickens=require('./routes/getChickens');

app.use(cors());
app.use(express.json());


app.use('/',chickens);


app.listen(4000,()=>{
    console.log('Listenging on port 4000')
})
const express=require('express');
const router=express.Router();
const chickens=require('../data/chickens')

router.get('/chickens',(req,res)=>{
    return res.status(200).json(chickens)
})

//find chicken by id
router.get('/chickens/:id',(req,res)=>{
const id=parseInt(req.params.id);
const chicken=chickens.find(chicken=>chicken.id===id)
return res.status(200).json(chicken)
})


// //limit
// router.get('/chickens/?',(req,res)=>{
// const limitTo=req.query.limit
// const limitedChickens=chickens.slice(0,parseInt(limitTo));
// res.json(limitedChickens)
// })



module.exports=router;
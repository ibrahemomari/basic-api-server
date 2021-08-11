"use strict";

const express = require('express');
const router=express.Router();


const {foods}=require('../models/index');

router.get('/food', getFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


router.get('/', (req, res)=>{
    res.send('hello');
});

router.get('/bad', (req, res)=>{
    let number = 12;
    number.forEach(x=> console.log(x));
    res.send('this Bad Route ');

});


async function getFood(req, res) {
    let food = await foods.findAll();
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    console.log(newFood);
    let food = await foods.create(newFood);
    res.status(200).json(food);
}

async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let reqBody = req.body;
    let found = await foods.findOne({ where: {id: id} });
    let updatedFood = await found.update(reqBody);
    res.status(200).json(updatedFood);
}

async function deleteFood(req,res) {
    let id = parseInt(req.params.id);
    let deletedFood= await foods.destroy({where: {id: id}});
    res.status(204).json(deletedFood);
}

module.exports = router;
"use strict";

const POSTGRES_URL = "postgres://localhost:5432/lap3";
const { Sequelize, DataTypes } = require("sequelize");
const FoodModel=require('./food.model');
const clothesModel=require('./clothes.model');

let sql=new Sequelize(POSTGRES_URL,{});

module.exports={
    foods:FoodModel(sql,DataTypes),
    clothes:clothesModel(sql,DataTypes),
    db:sql
}
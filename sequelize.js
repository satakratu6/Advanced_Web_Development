const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('tudos','postgres','root',{
    host:'localhost',
    dialect:'postgres',
});
module.exports=sequelize;
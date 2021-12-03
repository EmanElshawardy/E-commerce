const User=require('../db/models/user.model')
const Product=require('../db/models/products.model')
const CryptoJS = require("crypto-js");
const Cart=require('../db/models/cart.model')
const { ObjectId } = require('mongodb');
const upload = require('../middleware/fileupload');
const Myorders = require('../db/models/myorders.model');

class AdminController{

    static showsingleuser = async (req,res) =>{
        try{
            const user = await User.findById({_id:req.params.id})
            if(!user) throw new Error('user not found')
            res.status(200).send(user)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
//    updateanyuser
    static updateanyuser = async (req,res) =>{
        try{
            const newuser = await User.findOneAndUpdate({_id:ObjectId(req.params.id)},{
                $set:req.body
            },{new:true})
            res.status(200).send(newuser)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
//    deleteanyuser
    static deleteanyuser = async (req,res) =>{
        try{
        
            const usercart = await Cart.find({userId:req.params.id})
        
            for(let i=0;i<usercart[0].productsId.length;i++){
                const product = await Product.findById( { _id:usercart[0].productsId[i].productId } )
                product.stock+=usercart[0].productsId[i].quantity
                await product.save()
            }
       
            await Cart.deleteOne( { usercart } )
            await User.findOneAndDelete({_id:req.params.id})
            res.status(200).send({message:'user deleted'})
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
  
    static showallusers = async (req,res) =>{
        try{
            const users = await User.find()
            if(!users) throw new Error('no users found')
            res.status(200).send(users)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
    
   
    static product = async (req,res) =>{
        try{
            const newproduct = new Product(req.body)
            await newproduct.save()
            res.status(200).send(newproduct)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
    
    static updateproduct = async (req,res) => {
        try{
            const newproduct = await Product.findOneAndUpdate({_id:ObjectId(req.params.id)},{
                $set:req.body
            },{new:true})
            if(!newproduct) throw new Error('not found')
            res.status(200).send(newproduct)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }

    static deleteproduct = async (req,res)=>{
        try{
            await Product.findOneAndDelete({_id:req.params.id})
            res.status(200).send({message:'Product deleted'})
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
 
    static showsingle = async (req,res) =>{
        try{
            const product = await Product.findById(req.params.id)
            res.status(200).send(product)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
    
    static deleteusercart = async (req,res) => {
        try{
            const usercart = await Cart.find( { userId:req.body.userId } )
            if(usercart.length==0) throw new Error('this user has no cart yet')
         
            for(let i=0;i<usercart[0].productsId.length;i++){
                const product = await Product.findById( { _id:usercart[0].productsId[i].productId } )
                product.stock+=usercart[0].productsId[i].quantity
                await product.save()
            }
            await Cart.deleteOne( { usercart } )
            res.status(200).send({message:'user cart has been deleted'})
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
    
    static showcarts = async (req,res) => {
        try{
            const carts = await Cart.find()
            if(carts.length==0) throw new Error('there is no carts')
            res.status(200).send(carts)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
  
    static showsinglecart = async (req,res) => {
        try{
            const cart = await Cart.findOne( { userId:req.params.id } )
            if(!cart) throw new Error("user hasn't cart yet ")
            res.status(200).send(cart)
        }
        catch(e){
            res.status(200).send(e.message)
        }
    }
   
    static showsingleorders = async (req,res) => {
        try{
            const orders = await Myorders.findOne( { userId:req.params.id } )
            if(!orders) throw new Error("user hasn't orders yet ")
            res.status(200).send(orders)
        }
        catch(e){
            res.status(200).send(e.message)
        }
    }
 
    static showorders = async (req,res) => {
        try{
            const userorders = await Myorders.find()
            if(userorders.length==0) throw new Error('no orders found')
            res.status(200).send(userorders)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
   
    static addnewadmin = async (req,res) => {
        const newuser= new User({
            username:req.body.username,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password,process.env.PassSecret).toString(),
            phone:req.body.phone,
            gender:req.body.gender,
            address:req.body.address,
            isAdmin:true
        })
        try{
            const token = await newuser.generateToken()
            await newuser.save()
            res.status(200).send( { newuser , token } )
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
    static addproductimg = async (req,res) => {
        try{
            const product = await Product.findById({_id:req.params.id})
            if(!product) throw new Error('no product found')
            product.img = "assets/"+req.file.filename
            await product.save()
            res.status(200).send(product)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
}

module.exports = AdminController
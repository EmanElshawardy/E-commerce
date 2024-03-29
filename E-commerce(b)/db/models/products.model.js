const mongoose=require('mongoose')
const validator=require('validator')
const jwt = require('jsonwebtoken');

const ProductsSchema=mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    categorytype:{
        type:String,
        trim:true,
        required:true,
        enum:[ "soiree" ,"wedding" ]
    },
    size:{
        type:String,
        trim:true,
        required:true
    },
    img:{},
    },
    { timestamps : true}
)

ProductsSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    return data
}

ProductsSchema.methods.generateToken = async function(){
    const product=this
    const token= await jwt.sign({_id:product._id},process.env.JWTTOKEN)
    product.tokens.push({token})
    await product.save()
    return token
}

const Products=mongoose.model('Products',ProductsSchema)
module.exports=Products
const mongoose=require('mongoose')

const CartSchema=mongoose.Schema({
    userId:{
        type:String,
        trim:true,
        required:true
    },
    productsId:[
        {
            productId:[] ,
            quantity:{ type:Number , default:0 }
        }
    ],
    totalprice:{type:Number,default:0}
})

CartSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data._id
    delete data.__v
    return data
}

const Cart=mongoose.model('Cart',CartSchema)
module.exports=Cart
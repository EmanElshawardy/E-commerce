const router=require('express').Router()
const UserController=require('../controller/user.controller')
const { validation }=require('../middleware/auth.middleware')


router.put('/update', validation ,UserController.update)
router.put('/changepass', validation ,UserController.changepass)
router.delete('/delete', validation ,UserController.delete)
router.get('/profile', validation ,UserController.profile)
router.post("/addtocart" , validation ,UserController.addtocart)
router.get('/showcart', validation ,UserController.showcart)
router.get("/deletecart" , validation ,UserController.deletecart)
router.post("/increasequantity",validation ,UserController.increasequantity)
router.post("/decreasequantity", validation ,UserController.decreasequantity)
router.post("/deleteproductfromcart", validation ,UserController.deleteproductfromcart)
router.get('/showorder', validation ,UserController.showorder)
router.get('/sendorder', validation ,UserController.sendorder)
router.get('/showuserorder', validation ,UserController.showuserorder)

module.exports=router
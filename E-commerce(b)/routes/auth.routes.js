const router=require('express').Router()
const UserController=require('../controller/user.controller')
const { validation }=require('../middleware/auth.middleware')

router.post('/regestier',UserController.regestier)
router.post('/login',UserController.login)
router.get("/logout", validation , UserController.logout)
router.get("/logoutall", validation , UserController.logoutall)
router.get('/showallproducts' ,UserController.getallproducts)
router.get('/wedding' ,UserController.wedding)
router.get('/soiree' ,UserController.soiree)

module.exports=router
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewadminComponent } from './pages/admin/addnewadmin/addnewadmin.component';
import { AddnewproductComponent } from './pages/admin/addnewproduct/addnewproduct.component';
import { ShowallcartsComponent } from './pages/admin/showallcarts/showallcarts.component';
import { ShowallordersComponent } from './pages/admin/showallorders/showallorders.component';
import { ShowallusersComponent } from './pages/admin/showallusers/showallusers.component';
import { ShowsingleproductComponent } from './pages/admin/showsingleproduct/showsingleproduct.component';
import { ShowsingleuserComponent } from './pages/admin/showsingleuser/showsingleuser.component';
import { SinglecartComponent } from './pages/admin/singlecart/singlecart.component';
import { SingleordersComponent } from './pages/admin/singleorders/singleorders.component';
import { AllproductsComponent } from './pages/public/allproducts/allproducts.component';
import { WeddingComponent } from './pages/public/wedding/wedding.component';
import { SoireeComponent } from './pages/public/soiree/soiree.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { ChangepasswordComponent } from './pages/user/changepassword/changepassword.component';
import { LoginComponent } from './pages/user/login/login.component';
import { MyordersComponent } from './pages/user/myorders/myorders.component';
import { OrderComponent } from './pages/user/order/order.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"", component:AllproductsComponent},
  {path:"wedding", component:WeddingComponent},
  {path:"soiree", component:SoireeComponent},
  {path:"user" ,children:[
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"profile", component:ProfileComponent},
    {path:"changepass", component:ChangepasswordComponent},
    {path:"cart", component:CartComponent},
    {path:"order", component:OrderComponent},
    {path:"myorders", component:MyordersComponent},
  ]},
  {path:"admin" ,children:[
    {path:"addnewproduct", component:AddnewproductComponent},
    {path:"showsingleproduct/:id", component:ShowsingleproductComponent},
    {path:"showallcarts", component:ShowallcartsComponent},
    {path:"showallorders", component:ShowallordersComponent},
    {path:"addnewadmin", component:AddnewadminComponent},
    {path:"showallusers", component:ShowallusersComponent},
    {path:"singlecart/:id", component:SinglecartComponent},
    {path:"singleorders/:id", component:SingleordersComponent},
    {path:"singleuser/:id", component:ShowsingleuserComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

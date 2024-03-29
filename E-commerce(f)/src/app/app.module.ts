import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllproductsComponent } from './pages/public/allproducts/allproducts.component';
import { SoireeComponent } from './pages/public/soiree/soiree.component';
import { WeddingComponent } from './pages/public/wedding/wedding.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { DataService } from './services/data.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { ChangepasswordComponent } from './pages/user/changepassword/changepassword.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { OrderComponent } from './pages/user/order/order.component';
import { MyordersComponent } from './pages/user/myorders/myorders.component';
import { AddnewproductComponent } from './pages/admin/addnewproduct/addnewproduct.component';
import { ShowsingleproductComponent } from './pages/admin/showsingleproduct/showsingleproduct.component';
import { ShowallcartsComponent } from './pages/admin/showallcarts/showallcarts.component';
import { ShowallordersComponent } from './pages/admin/showallorders/showallorders.component';
import { AddnewadminComponent } from './pages/admin/addnewadmin/addnewadmin.component';
import { ShowallusersComponent } from './pages/admin/showallusers/showallusers.component';
import { SinglecartComponent } from './pages/admin/singlecart/singlecart.component';
import { SingleordersComponent } from './pages/admin/singleorders/singleorders.component';
import { ShowsingleuserComponent } from './pages/admin/showsingleuser/showsingleuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    SoireeComponent,
    WeddingComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ChangepasswordComponent,
    CartComponent,
    OrderComponent,
    MyordersComponent,
    AddnewproductComponent,
    ShowsingleproductComponent,
    ShowallcartsComponent,
    ShowallordersComponent,
    AddnewadminComponent,
    ShowallusersComponent,
    SinglecartComponent,
    SingleordersComponent,
    ShowsingleuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'foodMenu',component:FoodMenuComponent},
  {path:'myOrder',component:MyOrderComponent},
  {path:'orderList',component:OrderListComponent},
  {path:'login', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

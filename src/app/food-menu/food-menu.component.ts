import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'angular-star-rating';
@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {
rating: any=1

  
  constructor(private apiCall:ApiCallService ,private router:Router ,private formBuilder:FormBuilder){}
  endPoint:string='foodMenu'
  foodMenuData:any;
  searchValue:any;
  formBox:boolean=false
  orderName:any;
  orderImg:any;
  orderPrice:any;
  loginMassageToggle:boolean=false
  getLoginFormData:any
 
  ngOnInit(){
    this.apiCall.getApiCall(this.endPoint).subscribe(res=>{
      this.foodMenuData=res
      console.log(this.foodMenuData,'this is api call result')
     
    this.getLoginFormData=this.apiCall.loginFormData
    console.log(this.getLoginFormData.emailId,'this is login data')
    })
}
getSearchValue(searchData:any){
this.searchValue=searchData
console.log(this.searchValue,'this is search value')
}

orderData(img:any,name:any,price:any){
 
  if(this.getLoginFormData?.emailId){
    this.formBox=true

  }
  else{
    this.loginMassageToggle=true
  }
 this.apiCall.img=img
 this.apiCall.name=name 
 this.apiCall.price=price
this.orderName=name
this.orderImg=img
this.orderPrice=price

this.form()
}

orderForm!:FormGroup
form(){
this.orderForm=this.formBuilder.group({
emailId:[this.getLoginFormData?.emailId],
foodName:[this.orderName],
foodimg:[this.orderImg],
foodPrice:[this.orderPrice],
})
}

submit(formData:any){

console.log(formData,'this is form value')
this.apiCall.postApiCall(formData).subscribe(res=>{
})
this.router.navigateByUrl('myOrder')

 
}

orederCancle(){
  this.formBox=false
}
}

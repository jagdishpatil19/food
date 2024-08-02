import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {

  constructor(private apiCall:ApiCallService){}
 
 
 loginData:any;
  orderData:any;
  myOrderList:any=[]
  ngOnInit(){
   
  this.loginData=this.apiCall.loginFormData

 this.apiCall.getApiCall('orderData').subscribe((res:any)=>{
  console.log(res)
  res.find((ele:any)=>{
    if(ele.emailId==this.loginData.emailId){
      this.myOrderList.push(ele)
    }
  })
  this.apiCall.orderCount=this.myOrderList
 })

  
 
  }
  cancle(id:any){
  this.apiCall.deletApiCall('orderData',id).subscribe(res=>{
    
  })

  }
}

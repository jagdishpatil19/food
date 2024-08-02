import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
endPoint:string='orderData'
orderData:any;
cancleToggle:boolean=false
cancleIdGet:any;
  constructor(private apiCall:ApiCallService,private router:Router){}


  ngOnInit(){
    this.apiCall.getApiCall(this.endPoint).subscribe(res=>{
      this.orderData=res
    })
  }
  
  cancleToggleBtn(id:any){
this.cancleToggle=true
this.cancleIdGet=id
  }
  
  cancleOrder(){
     
  }
  noBtn(){
    this.cancleToggle=false
  }

  yesBtn(){
       this.apiCall.deletApiCall(this.endPoint,this.cancleIdGet).subscribe(res=>{
         
         console.log(res)
         this.cancleToggle=false
         this.router.navigateByUrl('myOrder')
       })
 
  }
}

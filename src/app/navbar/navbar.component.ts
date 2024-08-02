import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private apiCall:ApiCallService){}
endPoint:string='orderData'
orderData:any;
ngOnInit(){
  this.apiCall.getApiCall(this.endPoint).subscribe(res=>{
    this.orderData=res
  })
}
}

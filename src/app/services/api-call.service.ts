import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
 
  name: any;
  price: any;
  img: any;
  getOrderData:any;
  loginFormData: any;
  orderCount:any;
  constructor(private httpClient:HttpClient) { }

url='http://localhost:3000/'

getApiCall(endPoint:any){
return  this.httpClient.get(this.url+endPoint)
}

postApiCall(formData:any){
 return this.httpClient.post(this.url+'orderData',formData)
}
deletApiCall(endPoint:any ,id?:any){
  return this.httpClient.delete(this.url+endPoint+"/"+id)
}
}

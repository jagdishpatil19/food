import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  endPoint:any='Login'
 loginData:any;
 
 loginBoxToggle:boolean=true

  loginForm!:FormGroup
  data:any=["a","b","c"]
  constructor(private formBuilder:FormBuilder ,private apiCall:ApiCallService,private router:Router ){}
  ngOnInit(){
    this.apiCall.getApiCall(this.endPoint).subscribe(res=>{
      this.loginData=res
      console.log(this.loginData)
     
    })
   this.formLoad()
  }
  formLoad(){
    this.loginForm=this.formBuilder.group({
      emailId:[''],
      password:['']
    })
  }
  submit(){
   
  this.loginData.find((ele:any)=>{
     
    if(ele.emailId==this.loginForm.get('emailId')?.value && ele.password==this.loginForm.get('password')?.value){
   
      this.apiCall.loginFormData=ele
    
 this.router.navigateByUrl('foodMenu')
 
    }
  })
 
  }
}

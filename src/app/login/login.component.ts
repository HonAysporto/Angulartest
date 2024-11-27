import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (public router: Router) {}

ngOnInit() {
  this.allcustomer = JSON.parse(localStorage.getItem('allcustomers')!) 
}


  public email = ''
  public password = ''
  public allcustomer:any = []
  public msg = '';



  signin() {


    let student = this.allcustomer.find((customer:any, index:number)=>customer.email==this.email && customer.password==this.password)


    if (student) {
      localStorage.setItem('customerdetails', JSON.stringify(student))
      this.router.navigate(['customerdashboard'])
    } else {
      this.msg = 'No record found';
    }
  }

}

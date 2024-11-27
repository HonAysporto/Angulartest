import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


 

  formone:FormGroup;

  public allcustomer:any = []
  public check = ''
  public msg = ''
  

  generateaccountnumber() {
    const randomNumbers = Math.floor(Math.random() * 10000000000);
    return randomNumbers 
}

generateuser() {
  const randomNumbers = Math.floor(Math.random() * 1000);
  return `user-${String(randomNumbers).padStart(3, '0')}`; 
}

ngOnInit() {
  this.allcustomer = JSON.parse(localStorage.getItem('allcustomers')!) || []
}

  


  constructor(public builder: FormBuilder, public router: Router) {
    this.formone = this.builder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['', Validators.required],
      acctype:['', Validators.required],
      phonenumber:['', Validators.required],
      password:['', Validators.required],
      age:['', [Validators.min(18),Validators.required]],
      check:false,
      
    })
  }


  submit() {

    let user = {

      ...this.formone.value, 
      accountnumber : this.generateaccountnumber(),
      id: this.generateuser(),
      balance: 0,
      transferpin: ''
    }

    // console.log(user);

    for (let index = 0; index < this.allcustomer.length; index++) {
      const element = this.allcustomer[index];
      this.check =element.email
     
      
    }
    if (this.check == (this.formone.value['email'])) {
      this.msg = 'email exist already'
    } 
    else {
      this.allcustomer.push(user)
      localStorage.setItem('allcustomers', JSON.stringify(this.allcustomer))
      this.router.navigate(['signin'])
    }
    console.log(this.formone.value['email']);

    
  }

}

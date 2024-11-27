import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createpin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createpin.component.html',
  styleUrl: './createpin.component.css'
})
export class CreatepinComponent {

ngOnInit() {
  this.allcustomer = JSON.parse(localStorage.getItem('allcustomers')!) 
  this.customer = JSON.parse(localStorage.getItem('customerdetails')!) 



  this.allcustomer.find((student: any, index: number) => {
    if (student.email == this.customer.email ) {
        this.customerIndex = index
        return true
    }
    return false 
  });
}


public allcustomer:any = []
public customer:any = {}
public customerIndex = 0
public pin = ''
public msg = ''

  save() {

this.allcustomer[this.customerIndex].transferpin = this.pin
localStorage.setItem('allcustomers', JSON.stringify(this.allcustomer))
this.msg = "succesfully saved"
this.pin = ''
    

  }

}

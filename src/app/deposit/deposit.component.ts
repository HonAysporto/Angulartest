import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {


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



  public money = 0
  public allcustomer:any = []
  public customer:any = {}
  public customerIndex = 0
  public msg = ''
 



  deposit() {

    
    


  (this.allcustomer[this.customerIndex].balance) += Number(this.money)
  localStorage.setItem('customerdetails', JSON.stringify(this.allcustomer[this.customerIndex]))
  localStorage.setItem('allcustomers', JSON.stringify(this.allcustomer))
  this.msg = "Deposited succesfully "


 
    
  }


 
}

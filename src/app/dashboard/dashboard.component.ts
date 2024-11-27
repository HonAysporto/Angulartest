import { Component } from '@angular/core';
import { DasboardnavComponent } from '../dasboardnav/dasboardnav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DasboardnavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  public customer:any = {}


  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('customerdetails')!) 
  }



  

}

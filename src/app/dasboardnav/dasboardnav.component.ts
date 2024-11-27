import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dasboardnav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dasboardnav.component.html',
  styleUrl: './dasboardnav.component.css'
})
export class DasboardnavComponent {



constructor (public router: Router) {}



  signout() {
    this.router.navigate([''])
  }
}

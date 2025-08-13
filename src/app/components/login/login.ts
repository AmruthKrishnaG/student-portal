import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);

  username: string = '';
  password: string = '';
  checkDetails() {
    if (this.username === 'user' && this.password === 'user') {
      // login success

      // do something for the guard here - before redirection

      this.router.navigate(['students-list']);
    } else {
      alert('Wrong details');
    }
  }
}

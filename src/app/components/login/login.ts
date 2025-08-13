import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);
  private loginService = inject(LoginService);

  username: string = '';
  password: string = '';

  constructor() {
    localStorage.clear();
  }

  checkDetails(): void {
    if (this.loginService.checkDetails(this.username, this.password)) {
      this.router.navigate(['students-list']);
    }
  }
}

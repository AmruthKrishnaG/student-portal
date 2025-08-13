import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  checkDetails(username: string, password: string): boolean {
    if (username === 'user' && password === 'user') {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    alert('Wrong details');
    return false;
  }
}

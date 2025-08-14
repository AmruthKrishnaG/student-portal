import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('loggedIn');
  if (isLoggedIn === 'true') {
    return true;
  }
  return false;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ConocerGeneralService } from '../services/conocer-general-service';

export const authGuard: CanActivateFn = (route, state) => {

  const conocerGeneralService = inject(ConocerGeneralService);
  const router = inject(Router);
  
  if (conocerGeneralService.isLoggedIn()) return true;

  return router.createUrlTree(['/login'], {
    queryParams: { redirect: state.url },
  });
};

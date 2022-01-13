
import { RouterModule, Routes } from '@angular/router';

import { canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo, } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['board']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
      ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./board/board.module').then(
        (m) => m.BoardModule
      ),
      ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

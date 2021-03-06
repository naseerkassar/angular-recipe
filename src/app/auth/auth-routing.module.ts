import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';

const authRoutes: Routes = [
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent}
];
@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(authRoutes)],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {

}

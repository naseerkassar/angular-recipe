import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],

})
export class AuthModule {

}

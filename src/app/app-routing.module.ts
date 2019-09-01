import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  { path: '', redirectTo: 'UserProfile', pathMatch: 'full' },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'registration', component: RegistrationComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

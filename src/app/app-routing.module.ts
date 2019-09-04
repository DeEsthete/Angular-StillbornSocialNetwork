import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChatRoomsComponent } from './components/chat-rooms/chat-rooms.component';


const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'chat-rooms/:id', component: ChatRoomsComponent}
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

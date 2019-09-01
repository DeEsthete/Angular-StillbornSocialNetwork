import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { UsersService } from './Services/users.service';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideBarComponent,
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

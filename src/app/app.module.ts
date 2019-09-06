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
import { UserProfilePostsComponent } from './components/user-profile-posts/user-profile-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostsService } from './services/posts.service';
import { ChatRoomsComponent } from './components/chat-rooms/chat-rooms.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideBarComponent,
    AuthorizationComponent,
    RegistrationComponent,
    UserProfilePostsComponent,
    PostComponent,
    ChatRoomsComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

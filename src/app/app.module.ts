import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'

import { SidebarComponent } from './Demo/sidebar/sidebar.component';
import { PostsComponent } from './Demo/posts/posts.component';
import { UsersComponent } from './Demo/users/users.component';
import { DetailsComponent } from './Demo/details/details.component';
import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsDialogComponent } from './shared/details-dialog/details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    LandingPageComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    DetailsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

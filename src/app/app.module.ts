import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListItemsComponent } from './list-items/list-items.component';
import { ImgLazyLoadingComponent } from './img-lazy-loading/img-lazy-loading.component';
import {AnimateModule} from './animate/animate.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    LandingPageComponent,
    DetailsDialogComponent,
    ListItemsComponent,
    ImgLazyLoadingComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    AnimateModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    DetailsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

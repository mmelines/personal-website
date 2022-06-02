import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//module imports
import { ResumeModule } from './resume/resume.module';
import { HomeModule } from './home/home.module';
//form imports
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component'
import { NavigationComponent } from './navigation/navigation.component'
import { NavigationRoutesComponent } from './navigation-routes/navigation-routes.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    ResumeComponent,
    HomeComponent,
    NavigationComponent, 
    NavigationRoutesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ResumeModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

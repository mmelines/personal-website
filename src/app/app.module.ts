import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//module imports
import { ResumeModule } from './resume/resume.module';
//form imports
import { ResumeComponent } from './resume/resume.component';
import { NavigationComponent } from './navigation/navigation.component'
import { NavigationRoutesComponent } from './navigation-routes/navigation-routes.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    ResumeComponent,
    NavigationComponent, 
    NavigationRoutesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//this allows for routing
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    //what we declare
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    //import for browsers 
    BrowserModule,
    //register Http client module
    HttpClientModule,
    //path routes from root
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
     //default route on app loading
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        //wild card route incase url does not match any route
        //canActivate: [ProductGuardService], --would activate guard route
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    //import feature module
    ProductModule
  ],
  //adds bootstrap to app
  bootstrap: [AppComponent]
})
export class AppModule { }

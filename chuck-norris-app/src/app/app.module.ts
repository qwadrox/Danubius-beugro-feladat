import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryMenuComponent } from './menu-components/category-menu/category-menu.component';
import { JokesApiService } from './api-services/jokes-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JokeMenuComponent } from './menu-components/joke-menu/joke-menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, CategoryMenuComponent, JokeMenuComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [JokesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatPaginator
    FormsModule,
    TableModule,
    ButtonModule,
    ProgressSpinnerModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

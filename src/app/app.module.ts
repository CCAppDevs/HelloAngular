import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { CalloutComponent } from './Block/callout/callout.component';
import { WishlistComponent } from './Block/wishlist/wishlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameEditComponent } from './game-edit/game-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent,
    NavbarComponent,
    CardItemComponent,
    CardListComponent,
    GameDetailComponent,
    CalloutComponent,
    WishlistComponent,
    GameEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

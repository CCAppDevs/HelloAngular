import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  { path: "item", component: ItemComponent },
  { path: "item/:item", component: ItemComponent },
  { path: "games/:id", component: GameDetailComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

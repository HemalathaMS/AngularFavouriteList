import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
import { FavouritePlanetComponent } from './favourite-planet/favourite-planet.component';
import { PlanetService } from './planet.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, resolve: {
      psResolver: PlanetService
      }
  },
  {
    path: 'planetList', component: PlanetComponent
  },
  {
    path: 'favouritePlanetList', component: FavouritePlanetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

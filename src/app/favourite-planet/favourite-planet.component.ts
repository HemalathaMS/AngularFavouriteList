import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-favourite-planet',
  templateUrl: './favourite-planet.component.html',
  styleUrls: ['./favourite-planet.component.css']
})
export class FavouritePlanetComponent implements OnInit {

  planets: any = [];

  constructor(private ps: PlanetService) { }

  ngOnInit(): void {
    this.planets = this.ps.getData();
  }

}

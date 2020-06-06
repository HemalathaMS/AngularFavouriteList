import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets: any = [];

  constructor(private ps: PlanetService, private route: ActivatedRoute) {    
    
  }

  ngOnInit(): void {
    this.planets = this.ps.getData();
  }  

  toggleFavourite(planet) {
    for (let i = 0; i < this.planets.length; i++) {
      if (planet.name == this.planets[i].name) {
        this.planets[i].isFavourite = !this.planets[i].isFavourite;
      }
    }
    this.ps.setData(this.planets);
  }
}

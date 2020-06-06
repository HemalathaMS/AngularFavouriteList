import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from '../planet.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps: PlanetService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.ps.setData(data.psResolver);
    });
  }

}

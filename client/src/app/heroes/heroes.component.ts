import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'as-heroes',
  templateUrl: 'app/heroes/heroes.html',
  styleUrls: ['app/heroes/heroes.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .map(res => res.json())
      .subscribe(
        data => this.heroes = data.slice(1, 5),
        error => console.log(error)
      );
  }

  onSelect(hero: Hero) {
    let link = ['/heroes', hero.id ];
    this.router.navigate(link);
  }
}
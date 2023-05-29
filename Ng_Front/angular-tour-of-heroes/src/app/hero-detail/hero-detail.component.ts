import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
// import { Component, Input } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // @Input() hero?: Hero;
  hero: Hero | undefined;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = this.route.snapshot.params['id']
    this.heroService.getHero(id)
      .subscribe(data => this.hero = data);
  }
  // getHero(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

  goBack(): void {
    this.location.back();
  }
  removeHero(){
    const id = this.route.snapshot.params['id']
    this.heroService.deleteHero(id)
      .subscribe(data =>{
        console.log(data)
        this.hero = data
      } );
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

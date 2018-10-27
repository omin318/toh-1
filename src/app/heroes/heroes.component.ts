import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // 리터럴 객체로 객체 생성
  // hero: Hero = {
  //   id: 11,
  //   name: 'Winstorm'
  // };
  hero: Hero;
  heroes: Hero[];
  isSpecial = true;
  selectedHero: Hero;

  constructor() {
    // new 로 객체 생성
    // this는 객체 인스턴스 자기자신을 가르킨다.
    this.hero = new Hero();
    this.hero.id = 11;
    this.hero.name = 'Winstorm';

    // 의존성이 있는 코드 heroes 클래스가 heroService 클래스에 의존
    const heroService = new HeroService();
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
  }

  onSave(event) {
    console.log(event);
    alert('hi');
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero;
  }
}

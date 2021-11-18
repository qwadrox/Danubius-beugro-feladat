import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JokesApiService } from 'src/app/api-services/jokes-api.service';
import { Joke } from 'src/app/models/Joke';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Appear } from 'src/app/animations';

@Component({
  selector: 'app-joke-menu',
  templateUrl: './joke-menu.component.html',
  styleUrls: ['./joke-menu.component.scss'],
  animations: [Appear],
})
export class JokeMenuComponent implements OnInit {
  constructor(
    private jokesApiService: JokesApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  category?: string;
  joke$?: Observable<Joke>;

  getJoke() {
    this.joke$ = this.jokesApiService.getJoke(this.category!);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.getJoke();
  }
}

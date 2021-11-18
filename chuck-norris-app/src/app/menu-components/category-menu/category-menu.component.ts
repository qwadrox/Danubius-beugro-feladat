import { Component, OnInit } from '@angular/core';
import { JokesApiService } from 'src/app/api-services/jokes-api.service';
import { Observable } from 'rxjs';
import { FlyIn, Appear } from 'src/app/animations';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
  animations: [FlyIn, Appear],
})
export class CategoryMenuComponent implements OnInit {
  constructor(private jokesApiService: JokesApiService) {}
  categories$?: Observable<Array<string>>;
  getCategories() {
    this.categories$ = this.jokesApiService.getCategories();
  }
  ngOnInit() {
    this.getCategories();
  }
}

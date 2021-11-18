import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMenuComponent } from '../menu-components/category-menu/category-menu.component';
import { JokeMenuComponent } from '../menu-components/joke-menu/joke-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryMenuComponent },
  { path: 'joke/:category', component: JokeMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

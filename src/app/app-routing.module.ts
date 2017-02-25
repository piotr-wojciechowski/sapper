import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SapperComponent} from "./sapper/sapper.component";

const routes: Routes = [
  {
    path: 'sapper',
    component: SapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

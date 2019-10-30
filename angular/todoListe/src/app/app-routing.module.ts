import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

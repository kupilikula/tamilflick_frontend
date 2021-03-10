import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZineComponent } from './zine/zine.component';


const routes: Routes = [
	{path: 'zine' , component: ZineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

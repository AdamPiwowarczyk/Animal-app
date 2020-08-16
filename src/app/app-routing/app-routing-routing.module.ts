import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from '../components/animals/animals.component';
import { UpdateComponent } from '../components/update/update.component';


const routes: Routes = [
  { path: '', component: AnimalsComponent },
  { path: 'app-update/:id', component: UpdateComponent },
  { path: 'app-create', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }

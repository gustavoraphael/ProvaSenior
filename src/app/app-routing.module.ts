import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'item-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { SharedModule } from './../shared/shared.module';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    ToasterModule
  ],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }

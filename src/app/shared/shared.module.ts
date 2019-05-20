import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BaseFormComponent } from './base-form/base-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  exports: [
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  providers: [ ]
})
export class SharedModule { }

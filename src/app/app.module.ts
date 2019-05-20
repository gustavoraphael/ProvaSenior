import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { TemplateFormModule } from './template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToasterService, ToasterModule } from 'angular2-toaster';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AlertModule } from 'ngx-bootstrap';
import { MatSidenavMenuModule } from 'mat-sidenav-menu';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatListModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateFormModule,
    BrowserAnimationsModule,
    ToasterModule,
    RouterModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    MatSidenavMenuModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatListModule, MatNativeDateModule

  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { KbaseComponent } from './kbase/kbase.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    KbaseComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgbModule,NgbPaginationModule,NgbAlertModule,ReactiveFormsModule,RichTextEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

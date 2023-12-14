import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DentalserviveService } from './service/dentalservive.service';
import { TableListComponent } from './table-list/table-list.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { NewpatientComponent } from './newpatient/newpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    SamplecomponentComponent,
    NewpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
       HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

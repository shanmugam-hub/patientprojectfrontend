import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableListComponent } from './table-list/table-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DentalserviveService } from './service/dentalservive.service';
import { HttpClientModule } from '@angular/common/http';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { SidebarModule } from 'primeng/sidebar';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { ButtonModule}  from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    NewpatientComponent,
    SideBarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

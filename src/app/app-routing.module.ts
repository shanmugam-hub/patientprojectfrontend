import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }

 ,{
  path:'login',component:SamplecomponentComponent
},
{
  path:"practice",component:TableListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}

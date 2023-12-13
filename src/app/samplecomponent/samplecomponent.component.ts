import { Component } from '@angular/core';
import { DentalserviveService } from '../service/dentalservive.service';
import { Patient } from '../util/Patient';

@Component({
  selector: 'app-samplecomponent',
  templateUrl: './samplecomponent.component.html',
  styleUrls: ['./samplecomponent.component.css']
})
export class SamplecomponentComponent {

  public patient :any;
  constructor(private dentalService:DentalserviveService) {
    this.patient = new Patient();
   }

  ngOnInit() {
    this.dentalService.fetchalllist()
      .subscribe((data: any) => {
        this.patient = data.body;
        console.log(this.patient);

      }, (error:void) => {
        console.log(error);
      });
  
  }



}

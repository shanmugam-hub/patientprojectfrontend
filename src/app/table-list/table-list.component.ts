import { Component, OnInit } from '@angular/core';
import { DentalserviveService } from '../service/dentalservive.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  patient :any;
  constructor(private dentalService:DentalserviveService) { }

  ngOnInit() {
    this.dentalService.fetchalllist()
      .subscribe((body: any) => {
        this.patient = body;
        console.log(this.patient);

      }, (error:void) => {
        console.log(error);
      });
  
  }


}

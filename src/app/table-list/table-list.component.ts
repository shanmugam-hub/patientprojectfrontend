import { Component } from '@angular/core';
import { DentalserviveService } from '../service/dentalservive.service';
import { Patient } from '../util/Patient';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  constructor(private dentalService:DentalserviveService) 
  {
      this.patients = this.PreparePaitents();
  }
    
  patients: Array<Patient>;
  ngOnInit() {
    // this.dentalService.fetchalllist()
    //   .subscribe((body: any) => {
    //     this.patient = body;
    //     console.log(this.patient);

    //   }, (error:void) => {
    //     console.log(error);
    //   });
  }
  private PreparePaitents(): Array<Patient>
  {
    const patients: Array<Patient> = new Array<Patient>();
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    this.PreparePatient("Shanmug", 22, "9898989898", "B+", patients);
    return patients; 
  }
  private PreparePatient(name: string, age: number, mobile: string, bloodType: string, patients: Array<Patient>): void
  {
    const patient: Patient = new Patient();
    patient.name = name;
    patient.age = age;
    patient.mobile = mobile;
    patient.bloodType = bloodType;
    patients.push(patient);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AppConstants } from '../util/AppConstants';
import { Patient } from '../util/Patient';

@Injectable({
  providedIn: 'root'
})
export class DentalserviveService {


  Url : string="http://localhost:8085/api";

  token:string = '';
  isLoggedIn:boolean = false;

  constructor(private http:HttpClient,private router: Router) { }

  private handleError(error:any){
    if(error.status==0){
    //alert('An error occurred: '+"Connection Refused");
  } else {

    if(error.error.hasOwnProperty('message')){
      alert(error.error.message);
    }
    }
    return throwError('An error occured');

    
  }
  fetchalllist()
  {
    return this.http.get(this.Url+'/getpat').pipe(catchError(this.handleError));;
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient}  from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import '../interfaces'

@Component({
  selector: 'app-savers',
  templateUrl: './savers.component.html',
  styleUrls: ['./savers.component.scss']
})

export class SaversComponent implements OnInit {
  accounts$: Observable<BankAccount[]>;
  
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') 
      })
    };

    this.accounts$ = this.http
        .get<BankAccount[]>('https://api.up.com.au/api/v1/accounts', httpOptions)
        .map(data => _.values(data['data']))
  }
  
}

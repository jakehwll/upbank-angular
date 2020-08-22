import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient}  from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import '../interfaces'

interface TransactionAttributes {
  status: string,
  rawText: string,
  description: string,
  message: string,
  holdInfo: [],
  roundUp: string
  cashback: string
  amount: Value []
  foreignAmount: string
  settledAt: string
  createdAt: string
}

interface Transaction {
  type: string;
  id: string;
  attributes: TransactionAttributes []
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') 
      })
    };

    this.transactions$ = this.http
        .get<BankAccount[]>('https://api.up.com.au/api/v1/transactions', httpOptions)
        .map(data => _.values(data['data']))
  }

}

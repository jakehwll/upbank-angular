import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let api_key = document.querySelector('[data-settings] input') as HTMLInputElement
    api_key.value = localStorage.getItem('token')
  }

  myFunc(){
    let settings = document.querySelector('[data-settings] input') as HTMLInputElement
    localStorage.setItem('token', settings.value)
  }

}

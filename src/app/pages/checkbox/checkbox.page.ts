import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  datoscheck = [
    {
      name: "primary",
      selected: false
    },
    {
      name: "secondary",
      selected: true
    },
    {
      name: "tertiary",
      selected: false
    },
    {
      name: "success",
      selected: true
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onclick(item: any){
    console.log(item);
  }

}

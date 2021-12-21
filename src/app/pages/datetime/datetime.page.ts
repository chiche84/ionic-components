import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento =  new Date();
  eventosPersonalizados: any;


  constructor() {
    this.eventosPersonalizados = {
      buttons: [{
        text: "Link",
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text:"Loco",
        handler: (event) => {
          console.log(event, "loco");
        }
      }]
    }
  }

  ngOnInit() {
  }

  cambioFecha( event: any){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Robin', 'Raven', 'StarFire', 'Beast Boy', 'Wonder Girl'];

  habilitado: boolean =false;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: CustomEvent | any){
    console.log(event);

    let itemMovido = this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to, 0,itemMovido);
    event.detail.complete();
    console.log(this.personajes);
  }

}

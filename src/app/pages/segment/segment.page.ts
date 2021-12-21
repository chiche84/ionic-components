import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<any[]>;
  tabSeleccionado: string = '';

  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.heroes = this.usersService.getHeroes();
  }

  segmentChanged(event: CustomEvent | any){
    console.log(event.detail.value);
    this.tabSeleccionado = event.detail.value;
  }
}

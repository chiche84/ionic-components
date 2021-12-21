import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes: any[] = [];
  textoBuscar: string = '';

  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAlbunes().subscribe( resp => this.albunes = resp)
  }

  onSearchChange(event: any){
    this.textoBuscar = event.detail.value;
  }
}

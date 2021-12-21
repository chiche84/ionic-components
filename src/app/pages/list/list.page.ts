import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionLista: IonList;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usuarios = this.usersService.getUsers();
  }

  favorite(item: any){
    this.ionLista.closeSlidingItems();
  }

  share(item: any){
    this.ionLista.closeSlidingItems();
  }

  eliminar(item: any){
    this.ionLista.closeSlidingItems();
  }
}



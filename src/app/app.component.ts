import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IComponente } from './interfaces/interface';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Observable<IComponente[]>;

  constructor( private usersService: UsersService,
              public menuControler: MenuController) { }

  ngOnInit() {
    this.menu = this.usersService.getMenu();

  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll) scroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    setTimeout(() => {
        if (this.data.length > 50) {
          this.scroll.complete();
          this.scroll.disabled = true;
          return;
        }

        const nuevoArray = Array(20);
        this.data.push(... nuevoArray);
        this.scroll.complete();
    }, 1500);
  }

}

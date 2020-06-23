import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
 // tslint:disable-next-line: no-trailing-whitespace
 

@Component({
  selector: 'app-fire',
  templateUrl: './fire.page.html',
  styleUrls: ['./fire.page.scss'],
})
export class FirePage implements OnInit {

  itemValue = '';
  items: Observable<any[]>;
 // tslint:disable-next-line: no-trailing-whitespace
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
 // tslint:disable-next-line: no-trailing-whitespace
 
  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
  ngOnInit() {
  }

}

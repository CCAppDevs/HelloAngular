import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cardList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
}

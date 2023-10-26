import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() data: any = {
    title: "Placeholder Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://via.placeholder.com/640x360"
  };
}

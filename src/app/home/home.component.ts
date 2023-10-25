import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardList: any[] = [
    {
      title: "Card One",
      text: "This is a body of a card and I am making this up."
    },
    {
      title: "Card Two",
      text: "This is a body of a card and I am making this up."
    },
    {
      title: "Card Three",
      text: "This is a body of a card and I am making this up."
    }
  ];
}

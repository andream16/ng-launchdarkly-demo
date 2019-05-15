import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  curveCards = [
    {
      'type' : 'mastercard',
      'name' : 'monzo card',
    },
    {
      'type' : 'visa',
      'name' : 'ing card',
    },
    {
      'type' : 'american express',
      'name' : 'rewards',
    }
  ];
  cards = [];
  filterCards = (cardType: string) => {
    return this.curveCards.filter((card) => {
      return card.type != cardType;
    })
  }

  constructor(private ldService: AppService) {
    console.log(this.ldService.client.variation('amex'));
    if (this.ldService.client.variation('amex', false)) {
        console.log('false');
        this.cards = this.filterCards('american express');
    } else {
      console.log('true');
      this.cards = Object.assign([], this.curveCards);
    }
  }

}

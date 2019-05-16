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
  toggleFeature() {
    console.log(this.ldService.client.variation('amex'));
    if (this.ldService.client.variation('amex')) {
      this.cards = Object.assign([], this.curveCards);
    } else {
      this.cards = this.filterCards('american express');
    }
  }

  constructor(private ldService: AppService) {
    const self = this;
    ldService.client.on('ready', function() {
      self.toggleFeature();
    });
    ldService.client.on('change', function() {
      self.toggleFeature();
    });
  }

}

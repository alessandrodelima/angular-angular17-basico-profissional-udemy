import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('planType') planType: string = '';
  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;

  public buttonClicked (valueEmitted: boolean) {
    console.log('buttonClicked',valueEmitted);
  }
}

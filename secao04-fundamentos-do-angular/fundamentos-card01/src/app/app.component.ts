import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public cardPlanType: string = 'Simples';
  public cardPlanPrice: number = 100;

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}

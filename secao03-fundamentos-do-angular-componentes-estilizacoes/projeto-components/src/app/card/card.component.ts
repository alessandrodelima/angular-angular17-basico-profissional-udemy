import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
/*
  tipo = 'Teste';
  preco = 100;

  public getFullPrice() {
    setTimeout(() => {
      console.log('Set timeout');
      this.tipo = 'Simples';
    }, 4000);
    return 'R$' + this.preco + ',00/Mês';
  }*/

  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  }
}

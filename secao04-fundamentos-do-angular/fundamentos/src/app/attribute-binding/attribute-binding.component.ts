import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent {

  public buttonTitle: string = "Texto do botão";
  public buttonDisable: boolean = false;

  public onButtonClick() {
    this.buttonTitle = "Título Alteradoooooo!!!!!"
    this.buttonDisable = !this.buttonDisable;
  }
}

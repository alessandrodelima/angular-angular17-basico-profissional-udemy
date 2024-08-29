import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = 'Texto inicial Alterado';
  inputType = 'text';
  isDisabled = true;


public enableInput() {
  this.isDisabled = false;
}
public disabledInput () {
  this.isDisabled = true;
}

public setPassWordTypeInput () {
  this.inputText = 'password';
}

public setTextTypeInput() {
  this.inputText = 'text';
}

}



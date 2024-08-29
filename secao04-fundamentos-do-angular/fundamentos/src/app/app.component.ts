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
  this.inputType = 'password';
}

public setTextTypeInput() {
  this.inputType = 'text';
}

public logInputText() {
  console.log(this.inputText);
}

public handleInputKeyup(event: KeyboardEvent) {
  const currentText: string = (event.target as HTMLInputElement).value;
  console.log(currentText);
}

public handleInputEvent(event: Event) {
  const currentText: string = (event.target as HTMLInputElement).value;
  console.log(currentText);
}

}



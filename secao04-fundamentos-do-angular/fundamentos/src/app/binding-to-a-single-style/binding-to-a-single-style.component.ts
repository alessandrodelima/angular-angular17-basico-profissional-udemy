import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-to-a-single-style',
  templateUrl: './binding-to-a-single-style.component.html',
  styleUrl: './binding-to-a-single-style.component.scss'
})
export class BindingToASingleStyleComponent {

  public widthButton01: string = '110px';
  public widthButton02: any = '130';
  public styleObj = {
    width: '160px',
    backgroundColor: 'grey',
    color: 'black'
 }
 public updateStyleObj() {
   console.log('updateStyleObj');
  this.styleObj.width = '170px';
  this.styleObj.backgroundColor = 'lightblue';
 }

 public updateStyleObjCorrect () {
    console.log('updateStyleObjCorrect');

    this.styleObj = {
      width: '170px',
      backgroundColor: 'lightblue',
      color: 'black'
    };
 }

 public updateWidth () {
    this.widthButton02 = 200;
 }
}

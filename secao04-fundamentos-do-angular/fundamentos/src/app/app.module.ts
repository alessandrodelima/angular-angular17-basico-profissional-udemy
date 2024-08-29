import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { BindingToASingleStyleComponent } from './binding-to-a-single-style/binding-to-a-single-style.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeBindingComponent,
    BindingToASingleStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

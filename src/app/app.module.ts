import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { CardOrderComponent } from './card-order/card-order.component';
import { CardPanierComponent } from './card-panier/card-panier.component';
import { CardMoyPanierComponent } from './card-moy-panier/card-moy-panier.component';
import { CardNewCustomerComponent } from './card-new-customer/card-new-customer.component';
import { CardReccuClientComponent } from './card-reccu-client/card-reccu-client.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    CardOrderComponent,
    CardPanierComponent,
    CardMoyPanierComponent,
    CardNewCustomerComponent,
    CardReccuClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

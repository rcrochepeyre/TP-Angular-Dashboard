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
import { CardAbandonPanierComponent } from './card-abandon-panier/card-abandon-panier.component';
import { CardConversionCommandeComponent } from './card-conversion-commande/card-conversion-commande.component';
import { TabVentesComponent } from './tab-ventes/tab-ventes.component';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { ProduitsComponent } from './produits/produits.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    CardOrderComponent,
    CardPanierComponent,
    CardMoyPanierComponent,
    CardNewCustomerComponent,
    CardReccuClientComponent,
    CardAbandonPanierComponent,
    CardConversionCommandeComponent,
    TabVentesComponent,
    FourOfourComponent,
    ProduitsComponent,
    OrdersComponent,
    ProductComponent,
    OrderComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

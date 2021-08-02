import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { ProduitsComponent } from './produits/produits.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "produits", component: ProduitsComponent },
    { path: "orders", component: OrdersComponent },
    { path: "not-found", component: FourOfourComponent },
    { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

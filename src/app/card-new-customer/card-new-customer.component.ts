import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-new-customer',
    templateUrl: './card-new-customer.component.html',
    styleUrls: ['./card-new-customer.component.css']
})
export class CardNewCustomerComponent implements OnInit {
    titleCard:string = 'Nb. commandes';
    nbNewCustomers = Math.floor(Math.random() * (300 - 10 + 1)) + 10;

    constructor() { }

    ngOnInit(): void {
    }

}

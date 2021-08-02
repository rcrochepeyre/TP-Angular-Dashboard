import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-order',
    templateUrl: './card-order.component.html',
    styleUrls: ['./card-order.component.css']
})
export class CardOrderComponent implements OnInit {
    titleCard:string = 'Nb. commandes';
    nbCommandes = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
    constructor() { }

    ngOnInit(): void {
    }

}

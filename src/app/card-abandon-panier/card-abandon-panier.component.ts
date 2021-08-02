import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-abandon-panier',
    templateUrl: './card-abandon-panier.component.html',
    styleUrls: ['./card-abandon-panier.component.css']
})
export class CardAbandonPanierComponent implements OnInit {
    titleCard:string = 'Paniers abandonnés';
    abandonPanier = Math.floor(Math.random() * (30 - 2 + 1)) + 2;

    constructor() { }

    ngOnInit(): void {
    }

}

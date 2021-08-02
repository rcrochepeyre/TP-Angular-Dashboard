import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-panier',
    templateUrl: './card-panier.component.html',
    styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent implements OnInit {
    titleCard:string = 'Nb. paniers';
    nbPaniers = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
    constructor() { }

    ngOnInit(): void {
    }

}

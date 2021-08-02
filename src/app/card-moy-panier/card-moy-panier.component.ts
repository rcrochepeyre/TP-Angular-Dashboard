import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-moy-panier',
    templateUrl: './card-moy-panier.component.html',
    styleUrls: ['./card-moy-panier.component.css']
})
export class CardMoyPanierComponent implements OnInit {
    titleCard:string = 'Montant moy. d\'un panier';
    montantMoyPanier = Math.floor(Math.random() * (10000 - 1500 + 1)) + 1500;

    constructor() { }

    ngOnInit(): void {
    }

}

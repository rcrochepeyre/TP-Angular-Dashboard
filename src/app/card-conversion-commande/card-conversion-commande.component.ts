import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-conversion-commande',
    templateUrl: './card-conversion-commande.component.html',
    styleUrls: ['./card-conversion-commande.component.css']
})
export class CardConversionCommandeComponent implements OnInit {
    titleCard:string = 'Panier validés';
    convCommandes = Math.floor(Math.random() * (80 - 20 + 1)) + 20;

    constructor() { }

    ngOnInit(): void {
    }

}

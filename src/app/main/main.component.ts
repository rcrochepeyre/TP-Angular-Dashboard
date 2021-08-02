import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    tabCards = [
        {
            title: "Montant total des ventes",
            content: Math.floor(Math.random() * (10000 - 1500 + 1)) + 1500 + " €"
        },
        {
            title: "Nb. commandes",
            content: Math.floor(Math.random() * (300 - 10 + 1)) + 10
        },
        {
            title: "Nb. paniers",
            content: Math.floor(Math.random() * (300 - 10 + 1)) + 10 + " €"
        },
        {
            title: "Montant moy. d\'un panier",
            content: Math.floor(Math.random() * (10000 - 1500 + 1)) + 1500
        },
        {
            title: "Nouveaux clients",
            content: Math.floor(Math.random() * (300 - 10 + 1)) + 10
        },
        {
            title: "Réccurence client",
            content: Math.floor(Math.random() * (100 - 10 + 1)) + 10 + " %"
        },
        {
            title: "Paniers abandonnés",
            content: Math.floor(Math.random() * (30 - 2 + 1)) + 2
        },
        {
            title: "Panier validés",
            content: Math.floor(Math.random() * (80 - 20 + 1)) + 20
        }
    ];

    visites = Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000;

    constructor() { }

    ngOnInit(): void {
    }

}

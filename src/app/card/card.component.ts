import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    titleCard:string = 'Montant total des ventes';
    montantVentes = Math.floor(Math.random() * (10000 - 1500 + 1)) + 1500;
    constructor() { }

    ngOnInit(): void {
    }

}

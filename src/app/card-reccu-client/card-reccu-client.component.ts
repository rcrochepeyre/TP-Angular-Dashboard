import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-reccu-client',
    templateUrl: './card-reccu-client.component.html',
    styleUrls: ['./card-reccu-client.component.css']
})
export class CardReccuClientComponent implements OnInit {
    titleCard:string = 'Réccurence client';
    reccuClient = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

    constructor() { }

    ngOnInit(): void {
    }

}

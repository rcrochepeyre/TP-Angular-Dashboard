import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    visites = Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000;

    constructor() { }

    ngOnInit(): void {
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: "sample",
    selector: 'my-sayhello',
    styleUrls:["./sayhello.component.scss"],
    templateUrl: './sayhello.component.html'
})
export class SayHelloComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
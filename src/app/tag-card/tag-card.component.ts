import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tag-card',
    templateUrl: './tag-card.component.html',
    styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit {
    @Input() tag: any;

    constructor() {
    }

    ngOnInit() {
        console.log(this.tag)
    }

    searchTag(tag){
        console.log(tag);
    }
}

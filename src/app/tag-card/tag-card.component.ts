import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tag-card',
    templateUrl: './tag-card.component.html',
    styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit {
    @Input() tag: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
        console.log(this.tag);
    }

    searchTag(tag) {
        console.log(tag);
        this.router.navigate(['tag/' + tag]);
    }
}

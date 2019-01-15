import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../service/flickr.service';

@Component({
    selector: 'app-tag-search',
    templateUrl: './tag-search.component.html',
    styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {

    title = 'frontend';
    tag: string = '';
    results = [];


    constructor(private flickrService: FlickrService) {

    }

    keyDownFunction(event) {
        if (event.keyCode === 13 && this.tag.length > 0) {
            this.flickrService.SearchByTag(this.tag).then(resp => {
                console.log(resp);
                this.results.push(resp);
            }, error => {
                console.log(error);
            });
        }
    }

    ngOnInit() {
    }

}

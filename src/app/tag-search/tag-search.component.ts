import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../service/flickr.service';

@Component({
    selector: 'app-tag-search',
    templateUrl: './tag-search.component.html',
    styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {

    tag: string = '';
    results = [];

    constructor(private flickrService: FlickrService) {

    }

    keyDownFunction(event) {
        if (event.keyCode === 13 && this.tag.length > 0) {
            console.log(this.tag);
            this.search();
        }
    }


    search() {
        this.flickrService.SearchByTag(this.tag, 1).then(resp => {
            console.log(resp);
            let photo = resp['photo'][0];
            photo['dateupload'] = new Date(parseInt(photo['dateupload']) * 1000);
            photo['tag'] = this.tag + '';
            photo['pages'] = resp['pages'];
            photo['views'] = parseInt(photo['views']);
            this.results.push(photo);
        }, error => {
            console.log(error);
        });
    }

    ngOnInit() {
    }

    clearSearchBox() {
        this.tag = '';
    }
}

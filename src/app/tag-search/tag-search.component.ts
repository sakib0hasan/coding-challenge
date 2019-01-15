import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../service/flickr.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-tag-search',
    templateUrl: './tag-search.component.html',
    styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {

    tag: string = '';
    errorOccurred: boolean = false;
    isLoading: boolean = false;
    results = [];

    constructor(private flickrService: FlickrService) {

    }

    keyDownFunction(event) {
        if (event.keyCode === 13 && this.tag.length > 0) {
            this.search();
        }
    }

    search() {
        this.errorOccurred = false;
        this.isLoading = true;
        this.flickrService.SearchByTag(this.tag, 1).then(resp => {
            let photo = resp['photo'][0];
            photo['dateupload'] = new Date(parseInt(photo['dateupload']) * 1000);
            photo['tag'] = this.tag + '';
            photo['pages'] = resp['pages'];
            photo['views'] = parseInt(photo['views']);
            this.results.push(photo);
            this.sort('view');
            this.isLoading = false;
        }, error => {
            this.errorOccurred = true;
            this.isLoading = false;
        });
    }

    ngOnInit() {
    }

    clearSearchBox() {
        this.tag = '';
    }

    sort(method) {
        if (method === 'view') {
            this.results = _.sortBy(this.results, [function (o) {
                return o.views;
            }]);
        } else if (method === 'datetaken') {
            this.results = _.sortBy(this.results, [function (o) {
                return o.datetaken;
            }]);
        } else if (method === 'dateuploaded') {
            this.results = _.sortBy(this.results, [function (o) {
                return o.dateupload;
            }]);
        }
    }
}

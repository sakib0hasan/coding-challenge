import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../service/flickr.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: 'app-tag-results',
    templateUrl: './tag-results.component.html',
    styleUrls: ['./tag-results.component.scss']
})
export class TagResultsComponent implements OnInit {
    tag = "";
    results = [];

    constructor(private flickrService: FlickrService, private route: ActivatedRoute, private router: Router) {

        this.route.params.subscribe(params => {
            this.tag = params.id;
            this.flickrService.SearchByTag(this.tag, 12).then(resp => {
                console.log(resp);

                resp['photo'].forEach(p => {
                    let photo = p;
                    photo['dateupload'] = new Date(parseInt(photo['dateupload']) * 1000);
                    photo['tag'] = this.tag + '';
                    photo['pages'] = resp['pages'];
                    photo['views'] = parseInt(photo['views']);
                    this.results.push(photo);
                    this.sort('view');
                });


            }, error => {
                console.log(error);
            });
        });


    }

    ngOnInit() {
    }

    sort(method) {
        if (method === 'view') {
            this.results = _.sortBy(this.results, [function (o) {
                return o.views;
            }]);
            console.log(this.results);
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

    gotoSearch(){
        this.router.navigate(['/']);
    }
}

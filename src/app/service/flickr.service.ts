import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'accept': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class FlickrService {

    constructor(private http: HttpClient) {
    }

    SearchByTag(tag: string, per_page: number) {
        return new Promise((resolve, reject) => {
            let apiURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=49859c919138c6c04a8dcd993dc9f3d3&tags=' + tag + '&sort=interestingness-desc&extras=date_upload%2C+date_taken%2C+owner_name%2C+views%2C+url_q&per_page='+per_page+'&format=json&nojsoncallback=1';
            this.http.get(apiURL, httpOptions).subscribe(resp => {
                if (resp['photos']['photo'].length > 0) {
                    resolve(resp['photos']);
                } else {
                    reject('Empty response from api');
                }
            }, error => {
                reject(error);
            });
        });
    }
}

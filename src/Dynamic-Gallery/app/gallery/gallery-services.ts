import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Gallery } from './GalleryModel';


@Injectable()
export class GalleryLoadService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private galleryUrl = 'api/Gallery/Get'; 

    constructor(private http: Http) {
    }


    getGalleries(): Promise<Gallery[]> {
        return this.http.get(this.galleryUrl)
            .toPromise()
            .then(response => response.json() as Gallery[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}

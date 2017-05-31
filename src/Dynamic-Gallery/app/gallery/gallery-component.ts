import { Component, OnInit } from '@angular/core';
import { Gallery } from './GalleryModel';
import { GalleryLoadService } from './gallery-services';


@Component({
    selector: 'my-gallery',
    templateUrl: 'gallery-component.html',
    moduleId: module.id
})
export class GalleryComponent implements OnInit {
    galleries: Gallery[];

    constructor(private galleryService: GalleryLoadService) {
    }

    ngOnInit(): void {
        this.getGalleries();
    }

    getGalleries(): void {
        this.galleryService
            .getGalleries().then(gals => {
                this.galleries = gals;
            })
            .catch(err => console.log(err));
    }


}


import { Component } from '@angular/core';
import { GalleryComponent } from './gallery/gallery-component'

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id
})
export class AppComponent {
    title = 'Gallery Demo';

    constructor() { }
}

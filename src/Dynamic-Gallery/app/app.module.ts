import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { GalleryLoadService } from './gallery/gallery-services'
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery-component';

@NgModule({
    declarations: [
        AppComponent,
        GalleryComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, HttpModule],
    providers: [GalleryLoadService]

})
export class AppModule {

}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlickrService} from './service/flickr.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TagResultsComponent } from './tag-results/tag-results.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { TagCardComponent } from './tag-card/tag-card.component';

@NgModule({
    declarations: [
        AppComponent,
        TagResultsComponent,
        TagSearchComponent,
        TagCardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    providers: [
        FlickrService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

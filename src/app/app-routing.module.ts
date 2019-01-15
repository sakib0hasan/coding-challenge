import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TagResultsComponent} from './tag-results/tag-results.component';
import {TagSearchComponent} from './tag-search/tag-search.component';

const routes: Routes = [
    {
        path: '',
        component: TagSearchComponent
    },
    {
        path: 'tag/:id',
        component: TagResultsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

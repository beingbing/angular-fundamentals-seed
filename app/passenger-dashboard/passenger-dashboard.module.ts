import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

const routes: Routes = [
    {
        path: 'passenger',
        children: [
            {
                path: '',
                component: PassengerDashboardComponent
            },{
                path: ':id',
                component: PassengerViewerComponent
            }
        ]
    }
];
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}
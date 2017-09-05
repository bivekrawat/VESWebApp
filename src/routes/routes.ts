import { Routes } from '@angular/router';
import { NewResistrationComponent } from '../app/new-registration/new-registration.component';
import { AuthenticationComponent } from '../app/authentication/authentication.component';
import { ApprovedRequestsComponent } from '../app/approved-requests/approved-requests.component';
import { RouteGaurdService} from './route-gaurd.service';
export const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent,
    data: {}
  },
  {
    path: 'newRegistration',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'New' }
  },
  {
    path: 'inprogress',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'In Progress' }
  },
  {
    path: 'approved',
    component: ApprovedRequestsComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'Approved' }
  },
  {
    path: 'history',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'History' }
  },
  {
    path: '',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data : {}
  }
];


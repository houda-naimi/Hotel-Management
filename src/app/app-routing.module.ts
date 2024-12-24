import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { HomeComponent } from './home/home.component';
import { ClientAddComponent } from './client/client-add/client-add.component';
import { ChambreListComponent } from './chambre/chambre-list/chambre-list.component';
import { ChambreEditComponent } from './chambre/chambre-edit/chambre-edit.component';
import { ChambreAddComponent } from './chambre/chambre-add/chambre-add.component';
import { ChambreDetailComponent } from './chambre/chambre-detail/chambre-detail.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './reservation/reservation-edit/reservation-edit.component';
import { ReservationAddComponent } from './reservation/reservation-add/reservation-add.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientListComponent}, 
  { path: 'edit-client/:id', component: ClientEditComponent },
  { path: 'add-client', component: ClientAddComponent },
  { path: 'chambres', component: ChambreListComponent }, 
  { path: 'edit-chambre/:id', component: ChambreEditComponent },
  { path: 'add-chambre', component: ChambreAddComponent },
  { path: 'chambre-detail/:id', component: ChambreDetailComponent },
  { path: 'reservations', component: ReservationListComponent }, 
  { path: 'edit-reservation/:id', component: ReservationEditComponent },
  { path: 'add-reservation', component: ReservationAddComponent },
  { path: 'reservation-detail/:id', component: ReservationDetailComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '**', redirectTo: '/login' } 


 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

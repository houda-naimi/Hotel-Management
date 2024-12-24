import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAddComponent } from './client/client-add/client-add.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChambreAddComponent } from './chambre/chambre-add/chambre-add.component';
import { ChambreDetailComponent } from './chambre/chambre-detail/chambre-detail.component';
import { ChambreListComponent } from './chambre/chambre-list/chambre-list.component';
import { ChambreEditComponent } from './chambre/chambre-edit/chambre-edit.component';
import { ReservationAddComponent } from './reservation/reservation-add/reservation-add.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { ReservationEditComponent } from './reservation/reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { AuthModule } from './auth/auth.module';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientAddComponent,
    ClientDetailComponent,
    ClientEditComponent,
    ClientListComponent,
    HomeComponent,
    ChambreAddComponent,
    ChambreDetailComponent,
    ChambreListComponent,
    ChambreEditComponent,
    ReservationAddComponent,
    ReservationDetailComponent,
    ReservationEditComponent,
    ReservationListComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

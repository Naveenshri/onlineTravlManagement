import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { TripDetailsComponent } from './tripDetails.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import {CalendarModule} from 'primeng/primeng';
@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    CommonModule,
    DataTableModule,
    SharedModule,
    ModalModule.forRoot(),
    CalendarModule
    
  ],
  declarations: [ DashboardComponent,TripDetailsComponent ]
})
export class DashboardModule { }

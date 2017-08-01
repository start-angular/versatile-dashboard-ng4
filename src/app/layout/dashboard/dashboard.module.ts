import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from '../../shared/components/sidebar/sidebar.module';
@NgModule({
    imports: [CommonModule, DashboardRoutingModule, SidebarModule],
    declarations: [DashboardComponent]
})
export class DashboardModule {}

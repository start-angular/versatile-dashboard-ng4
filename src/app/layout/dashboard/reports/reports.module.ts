import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SidebarModule } from '../../../shared/components/sidebar/sidebar.module';

@NgModule({
    imports: [CommonModule, ReportsRoutingModule, SidebarModule],
    declarations: [ReportsComponent]
})
export class ReportsModule {}

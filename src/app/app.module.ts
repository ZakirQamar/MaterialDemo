import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import { VillageListComponent } from './village-list/village-list.component';
import { WebapiService } from './services/webapi.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DataTableComponent,
    VillageListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    HttpModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

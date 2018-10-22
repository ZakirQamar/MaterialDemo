import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Village } from '../modules/village.module';
import { WebapiService } from '../services/webapi.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-village-list',
  templateUrl: './village-list.component.html',
  styleUrls: ['./village-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VillageListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  response: Village[] = [{tahsil: '', grampanchayat: '', block: '', village: ''}];
  displayedColumns: string[] = ['tahsil', 'block', 'grampanchayat', 'village'];
  dataSource = new MatTableDataSource(this.response);

  constructor(private webapi: WebapiService) { }

  ngOnInit() {
  }

  getData() {

    const SHEET_ID = '1a9xmyJ8IVNf8DsJqLb743Px4CCrwZML9uw4TNEDE_hg1';
    this.webapi.getList(SHEET_ID).subscribe( res => {
      this.response = this.copyObject(res);
      this.dataSource = new MatTableDataSource(this.response);
      this.initialiseTable();
    });
  }

  copyObject(data) {
    const result: Village[] = [];

    data.values.forEach(element => {
      result.push({tahsil: element[0], block: element[1], grampanchayat: element[2], village: element[3] } );
    });
    return result.slice(1);
  }

  applyFilter(filterValue: string) {
    this.dataSource = new MatTableDataSource(this.response);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.initialiseTable();
  }

  initialiseTable() {
    this.dataSource.paginator = this.paginator;
  }

}

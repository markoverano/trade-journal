import { Component, OnInit } from '@angular/core';
import {JournalEntriesService} from '../shared/journal-entries.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {CalcComponent } from '../calc/calc.component';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  constructor(
    private service: JournalEntriesService,
    private dialog: MatDialog) { }

  ngOnInit() {
    // this.service.refreshList();
  }

  AddOrEditOrderItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { };
    this.dialog.open(CalcComponent, dialogConfig).afterClosed().subscribe(res => {
      // this.updateGrandTotal();
    });
  }

}

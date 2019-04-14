import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../shared/services/journal-entries.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalcComponent } from '../calc/calc.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  list: any[];

  constructor(private service: JournalEntriesService, private dialog: MatDialog) { 
    //stuff
  }

  ngOnInit() {

    this.service.getJournalEntries().subscribe((res: any) => {
      this.list = res;
    });
  }

  AddOrEditOrderItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "80%";
    dialogConfig.data = {};
    this.dialog.open(CalcComponent, dialogConfig).afterClosed().subscribe(res => {
      // this.updateGrandTotal();
    });
  }



}

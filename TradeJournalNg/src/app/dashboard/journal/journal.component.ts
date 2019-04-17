import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../shared/services/journal-entries.service';
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
    if (environment.production) {
      this.service.getJournalEntries().subscribe((res: any) => {
        this.list = res;
      });
    }
    else {
      this.list = [{
        journal_id: 0,
        stock_code: 'DD',
        shares: 12312,
        journal_date: null,
        gain_loss: 0,
        profit: 0,
        gain_percentage: 0,

        entry_date: null,
        entry_price: 23,
        entry_clearing_fee: 0,
        entry_commission: 0,
        entry_vat: 0,
        entry_trans_fee: 0,
        entry_charge_total: 0,
        entry_gross_amt: 0,
        entry_net_amt: 22324,

        exit_date: null,
        exit_net_amt: 44232,
        exit_price: 25,
        exit_clearing_fee: 0,
        exit_commission: 0,
        exit_trans_fee: 0,
        exit_vat: 0,
        exit_sales_tax: 0,
        exit_gross_amt: 12213,
        exit_charge_total: 123213,
        break_even: 0,
        cut_loss: 0
      },
      {
        journal_id: 0,
        stock_code: 'GTCAP',
        shares: 12312,
        journal_date: null,
        gain_loss: 4,
        profit: 0,
        gain_percentage: 0,

        entry_date: null,
        entry_price: 23,
        entry_clearing_fee: 0,
        entry_commission: 0,
        entry_vat: 0,
        entry_trans_fee: 0,
        entry_charge_total: 0,
        entry_gross_amt: 0,
        entry_net_amt: 22324,

        exit_date: null,
        exit_net_amt: 44232,
        exit_price: 25,
        exit_clearing_fee: 0,
        exit_commission: 0,
        exit_trans_fee: 0,
        exit_vat: 0,
        exit_sales_tax: 0,
        exit_gross_amt: 12213,
        exit_charge_total: 123213,
        break_even: 0,
        cut_loss: 0
      }]
    }
  }

  addTradeEntry() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    // dialogConfig.height = "90%";
    dialogConfig.data = {};
    this.dialog.open(CalcComponent, dialogConfig).afterClosed().subscribe(res => {
      // this.updateGrandTotal();
    });
  }



}

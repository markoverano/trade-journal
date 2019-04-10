import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JournalEntries } from '../shared/journal-entries.model';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

//@todo convert this to server data
const _brokerCommission: number = 0.0025; //Commission | .25% of the Gross Trade Amount
const _vat: number = 0.12; // Value Add Tax | 12%	Of Commission
const _transFee: number = 0.00005;//Philippine Stock Exchange Transaction Fee | .005% of the Gross Trade Amount;
const _sccpFee: number = 0.0001; // Securities Clearing Corporation of the Philippines Fee (SCCP) | .01%	Of Gross Trade Amount;


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  formData: JournalEntries

  calculateTrade(shares: number, entry: number, exit: number) {
    shares = (shares || 0);
    entry = (entry || 0);
    exit = (exit || 0);

    let entryCommision = (this.formData.entry_gross_amt * _brokerCommission),
        entryCommisionFinal = entryCommision <= 20 ? 20 : entryCommision;

    this.formData.entry_gross_amt = shares * entry;
    this.formData.entry_commission = entryCommisionFinal;
    this.formData.entry_vat = entryCommisionFinal * _vat;
    this.formData.entry_trans_fee = this.formData.entry_gross_amt * _transFee;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<JournalEntries>
  ) { }

  ngOnInit() {
    this.formData = {
      journal_id: 0,
      stock_code: '',
      shares: 0,
      journal_date: null,
      gain_loss: 0,
      profit: 0,
      gain_percentage: 0,

      entry_date: null,
      entry_price: 0,
      entry_clearing_fee: 0,
      entry_commission: 0,
      entry_vat: 0,
      entry_trans_fee: 0,
      entry_charge_total: 0,
      entry_gross_amt: 0,
      entry_net_amt: 0,

      exit_date: null,
      exit_net_amt: 0,
      exit_price: 0,
      exit_clearing_fee: 0,
      exit_commission: 0,
      exit_trans_fee: 0,
      exit_vat: 0,
      exit_sales_tax: 0,
      exit_gross_amt: 0,
      exit_charge_total: 0
    }

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}

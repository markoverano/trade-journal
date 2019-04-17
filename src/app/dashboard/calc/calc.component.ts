import { Component, OnInit, Inject, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Journal } from '../../shared/models/journal-entries.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDatepickerModule, MatDatepicker } from "@angular/material";
import { JournalEntriesService } from '../../shared/services/journal-entries.service';
import * as utilities from '../../shared/helpers/utilities';
// import * as angular from 'angular';


//@tdodo refactor
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

  formData: Journal

  calculateTrade(shares: number, entry: number, exit: number) {
    shares = (shares || 0);
    entry = (entry || 0);
    exit = (exit || 0);

    this.calculateEntry(shares, entry);
    this.calculateExit(shares, exit);
    this.calculateBreakEven(shares, entry);
    this.calculatePotential(shares, entry, exit);
  }

  calculateEntry(shares: number, entry: number) {

    if (shares == 0 || entry == 0) {
      return;
    }

    let entryGrossAmt = shares * entry,
      entryCommision = (this.formData.entry_gross_amt * _brokerCommission),
      entryCommisionFinal = entryCommision <= 20 ? 20 : entryCommision;

    this.formData.entry_gross_amt = entryGrossAmt;
    this.formData.entry_commission = utilities.roundToTwo(entryCommisionFinal);
    this.formData.entry_vat = utilities.roundToTwo(entryCommisionFinal * _vat);
    this.formData.entry_trans_fee = utilities.roundToTwo(entryGrossAmt * _transFee); //refactor
    this.formData.entry_clearing_fee = utilities.roundToTwo(entryGrossAmt * _sccpFee);

    let totalEntryCharges = +this.formData.entry_commission + +this.formData.entry_vat + +this.formData.entry_trans_fee + +this.formData.entry_clearing_fee;

    this.formData.entry_charge_total = utilities.roundToTwo(totalEntryCharges);

    // entryNetAmt = utilities.roundToTwo(+entryGrossAmt + +totalEntryCharges);
    this.formData.entry_net_amt = utilities.roundToTwo(+entryGrossAmt + +totalEntryCharges);
  }

  calculateExit(shares: number, exit: number) {
    if (shares == 0 || exit == 0) {
      return;
    }

    let exitGrossAmt = shares * exit,
      exitCommision = exitGrossAmt * _brokerCommission,
      exitCommissionFinal = exitCommision <= 20 ? 20 : exitCommision;

    this.formData.exit_gross_amt = exitGrossAmt;
    this.formData.exit_commission = utilities.roundToTwo(exitCommissionFinal);
    this.formData.exit_clearing_fee = utilities.roundToTwo(exitGrossAmt * _sccpFee);
    this.formData.exit_trans_fee = utilities.roundToTwo(exitGrossAmt * _transFee);
    this.formData.exit_vat = utilities.roundToTwo(exitCommision * _vat);
    this.formData.exit_sales_tax = utilities.roundToTwo(exitGrossAmt * 0.006);

    let exitTotalCharges = +this.formData.exit_commission + +this.formData.exit_vat + +this.formData.exit_trans_fee + +this.formData.exit_clearing_fee + +this.formData.exit_sales_tax,
      exitNetAmt = utilities.roundToTwo(exitGrossAmt - exitTotalCharges);

    this.formData.exit_charge_total = utilities.roundToTwo(exitTotalCharges);

    this.formData.exit_net_amt = exitNetAmt;

  }

  calculatePotential(shares, entry, exit) {
    // debugger;
    if (shares != 0 && entry != 0 && exit != 0) {
      let entryPriceWithCutPercentage = entry * 0.02, 
        netProfit = utilities.roundToTwo(this.formData.exit_net_amt - this.formData.entry_net_amt);
      this.formData.profit = netProfit;
      this.formData.cut_loss = utilities.roundToTwo((entryPriceWithCutPercentage - entry) * -1);
      this.formData.gain_loss = utilities.roundToTwo((netProfit / this.formData.entry_net_amt) * 100);
    }
  }

  calculateBreakEven(shares: number, entry: number) {
    let breakEven = 0,
      grossAmt = shares * entry;

    if (shares != 0 && grossAmt != 0) {
      breakEven = utilities.roundToTwo(grossAmt / (0.99485 - (1.12 * _brokerCommission)) / shares)
    }

    this.formData.break_even = breakEven;
  }

  resetForm() {
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
      exit_charge_total: 0,
      break_even: 0,
      cut_loss: 0
    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private service: JournalEntriesService,
    public dialogRef: MatDialogRef<Journal>
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    this.formData.shares = form.value.shares;
    this.formData.stock_code = form.value.stock_code;
    this.service.saveOrUpdateJournal(this.formData).subscribe((result) => {
      console.log(result);
  });
  }
}

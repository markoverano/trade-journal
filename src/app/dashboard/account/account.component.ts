import { Component, OnInit } from '@angular/core';
import {Account} from "../../shared/models/account-model";
// import { DialogOverviewExampleDialog } from "../account/fund/fund.component";
const SAMPLE_ACCOUNT = [{
  id: 1,
  userName: "redmichsa",
  totalCash: 400,
  totalEquity: 600
}];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  account: Account = {
    id: 1,
    userName: "redmichsa",
    totalCash: 400,
    totalEquity: 600
  }

  ngOnInit() {
  }

  // setFunds(){
  //   let dialogRef = DialogOverviewExampleDialog;
  // }
}

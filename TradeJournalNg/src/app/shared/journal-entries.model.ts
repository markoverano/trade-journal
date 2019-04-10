export class JournalEntries{
    journal_id: number;
    stock_code: string;
    shares: number;
    journal_date: Date;
    entry_date: Date;
    exit_date: Date;
    profit: number;
    gain_loss: number;
    entry_net_amt: number;
    exit_net_amt: number;
    entry_price: number;
    entry_clearing_fee: number;
    entry_commission: number;
    entry_vat: number;
    entry_trans_fee: number;
    entry_gross_amt: number;
    exit_price: number;
    exit_clearing_fee: number;
    exit_commission: number;
    exit_trans_fee: number;
    exit_vat: number;
    exit_sales_tax: number;
    exit_gross_amt: number;
    entry_charge_total: number;
    exit_charge_total: number;
    gain_percentage: number;
}

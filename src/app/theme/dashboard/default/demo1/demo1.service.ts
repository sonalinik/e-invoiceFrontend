// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import {map, retry} from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable()
// export class Demo1Service {
//   httpData: any;
//   url:string;
//   url1 = "http://localhost:4000/gl-statement-code";
//   constructor(private _http: HttpClient) {

//   }


//     //load data for student forms
//     loadData(): Observable<any> {

//       return this._http.get(this.url1).pipe(

//         map((res) => res)

//       )

//     }
//     private extractData(res: Response) {
//       console.log(res)
//       let body = res;
//       return body;
//     }

// getData():Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.get(this.url+'/user',{headers:httpHeaders});
//   console.log(result);
//   return result;
// }

// deleteStudent(id,database):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.delete(this.url+'/user/'+id,{headers:httpHeaders});
//   return result;
// }

// submitData(data):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.post(this.url+'/user',data,{headers:httpHeaders});
//   console.log(result);
//   return result;
// }

// getStudentData(id,database):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.get(this.url+'/user/'+id,{headers:httpHeaders});
//   return result;
// }

// updateData(data):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.put(this.url+'/user',data,{headers:httpHeaders});
//   console.log(result);
//   return result;
// }

// getMasterData():Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.get(this.url+'/master',{headers:httpHeaders});
//   return result;
// }
// }



import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class Demo1Service {
  getBooks(): TreeviewItem[] {

    const masterMenu = new TreeviewItem({
        text: 'Master', value: 1, children: [
          {
            text: 'General Ledger', value: 101, children: [
              { text: 'GL Statement Code', value: 10101 },
              { text: 'GL Account Master', value: 10102 },
              { text: 'GL Report Master', value: 10103 },
              { text: 'GL Report Linking', value: 10104 },
              { text: 'Budget Master', value: 10105 },
            ]
          },
          {
            text: 'Customer', value: 102, children: [
              { text: 'Customer Id', value: 10201 },
              { text: 'Shares Master', value: 10202 },
              { text: 'Anamat / General Sub Master', value: 10203 },
              { text: 'Saving Master', value: 10204 },
              { text: 'Current Account Master', value: 10205 },
              { text: 'Term Deposits Master', value: 10206 },
              { text: 'Cash Credit Master', value: 10207 },
              { text: 'Term Loan Master', value: 10208 },
              { text: 'Dispute Loan Master', value: 10209 },
              { text: 'Pigmy Agent Master', value: 10210 },
              { text: 'Pigmy Account Master', value: 10211 },
              { text: 'Dead Stock Master', value: 10212 },
            ]
          },
          {
            text: 'Balance Entry', value: 103, children: [
              { text: 'Balance Updation', value: 10301 },
              { text: 'Reconciliation Opening Transaction Entry', value: 10302 },
              { text: 'Reconciliation Transaction Entry', value: 10303 },
              { text: 'Loan Installment Edit and Close Date Updation', value: 10304 },

            ]
          },
          {
            text: 'Policy Settings', value: 104, children: [
              { text: 'Information', value: 10401 },
              { text: 'Definations', value: 10402 },
              { text: 'Sizewise Balance Modification', value: 10403 },
              { text: 'TD Receipt Type Master', value: 10404 },
              { text: 'NPA Classification Slab Master ', value: 10405 },

            ]
          },
          {
            text: 'Maintainance', value: 105, children: [
              { text: 'Security Details', value: 10501 },
              { text: 'Loan And CC Interest Rate Changes', value: 10502 },
              { text: 'Deposit / Loan Interest Rate Edit / Change', value: 10503 },
              { text: 'NPA Opening Details Entry', value: 10504 },
              { text: 'Interest Posting Flag Updation', value: 10505 },
              { text: 'Accountwise Document Acceptance', value: 10506 },
              { text: 'Noting Charges', value: 10507 },
            ]
          },
          {
            text: 'Instruction', value: 106, children: [
              { text: 'Over Draft', value: 10601 },
              { text: 'Standing Instruction', value: 10602 },
              { text: 'Interest Instruction', value: 10603 },
              { text: 'Special', value: 10604 },
              { text: 'Freeze Account', value: 10605 },
              { text: 'Reminder Instruction', value: 10606 },
              { text: 'Revoke Standing Instructions', value: 10607 },
              { text: 'Revoke Interest Instruction', value: 10608 },
              { text: 'Revoke Special Instruction', value: 10609 },
              { text: 'Lien Mark Clear', value: 10610 },
            ]
          },
          {
            text: 'Investment', value: 107, children: [
              { text: 'Account Opening', value: 10701 },
              { text: 'Transaction Entry', value: 10702 },
              { text: 'Account Closing', value: 10703},
              { text: 'Account Open Passing', value: 10704 },
              { text: 'Transaction Passing', value: 10705 },
              { text: 'Account Close Passing', value: 10706 },
            ]
          },
          {
            text: 'Shares/Dividend', value: 108, children: [
              { text: 'Unpaid Dividend Entry', value: 10801 },
              { text: 'Year Wise Unpaid Dividend Entry', value: 10802 },
              { text: 'Dividend Transfer Entry', value: 10803 },
              { text: 'Dividend Transfer Posting', value: 10804 },
              { text: 'Dividend Calculation', value: 10805 },
              { text: 'Dividend Posting', value: 10806 },
            ]
          },
          {
            text: 'SignatureScanning', value: 109
          },
          {
            text: 'DDBankCityMaster', value: 110
          },

        ]

      },
    );
    const transactionMenu = new TreeviewItem({
        text: 'Transaction', value: 2, children: [
          {
            text:'Voucher Entry', value:201
          },
          {
            text:'Multi Voucher', value:202
          },
          {
            text:'Batch Transfer Voucher', value:203
          },
          {
            text:'Member Dividend And Payable Dividend Transaction', value:24
          },
          {
            text:'Member Transfer', value:205, children: [
              { text: 'Member Transfer Transaction', value: 20501 },
              { text: 'Branch And Salary Division Changes', value: 20502 },
              { text: 'Trasferred Member Opening Balances', value: 20503 },
            ]
          },
          {
            text:'Recovery', value:206, children: [
              { text: 'Recovery Processing', value: 20601 },
              { text: 'Recovery Modification', value: 20602 },
              { text: 'Recovery Posting', value: 20603 },
              { text: 'Recovery Data Import Export', value: 20604 },
            ]
          },
          {
            text:'Member Loan', value:207, children: [
              { text: 'Loan Application', value: 20701 },
              { text: 'Loan Sanction', value: 20702 },
            ]
          },
          {
            text:'DD Transaction', value:208
          },
          {
            text:'Pigmy Chart Entry', value:209
          },
          {
            text:'Dividend Pay', value:210, children: [
              { text: 'Dividend Paid Mark(Salary Division)', value: 21001 },
              { text: 'Dividend Pay(Salary Division)', value: 21002 },
            ]
          },
          { 
            text:'Cash Credit A/c Renewal', value:211
          },
          {
            text:'Share Transaction', value:212
          },
          {
            text:'Term Deposit Account Closing', value:213
          },
          {
            text:'Term Deposite A/c Renewal', value:214
          },
          {
            text:'Cash Denomination', value:215, children: [
              { text: 'Accept Denomination', value: 21501 },
              { text: 'Payment Denomination', value: 21502 },
              { text: 'Cash In Denomination', value: 21503 },
              { text: 'Cash Out Denomination', value: 21504 },
              { text: 'cash Initialisation Entry', value: 21505 },
              { text: 'Safe Valult To Cashier', value: 21506 },
              { text: 'Cashier To Safe Vault', value: 21507 },
            ]
          },
          {
            text:'Passbook Printing', value:216, children: [
              { text: 'Passbook Issue', value: 21601 },
              { text: 'Passbook Entry Print', value: 21602 },
            ]
          },
          {
            text:'Term Deposit Receipt Printing', value:217, children: [
              { text: 'Deposit Receipt Print', value: 21701 },
            ]
          },
          {
            text:'Dead Stock Purchase', value:218
          },
          {
            text:'Dead Stock Transaction', value:219
          },
          {
            text:'Reconciliation Entry', value:220
          },
        ]
      },

    );
    const passingMenu = new TreeviewItem({
        text:'Passing', value:3, children:[
          {
            text:'Centralised Passing', value:301, children: []
          },
          {
            text:'Shares Transaction Passing', value:302, children: []
          },
          {
            text:'Unapproval', value:303, children: [
              { text:'Unapproval Multivoucher', value:30301 },
              { text:'Unapproval Voucher', value:30302 },
              { text:'Unapproval Deposit Closing', value:30303 },
              { text:'Unapproval Deposit Posting', value:30304 },
            ]
          },
          {
            text:'Master Unlock', value:304, children: []
          },
        ]
      },
    );
    const viewMenu = new TreeviewItem({
      text:'View', value:4, children:[
          {
            text:'Account Enquiry', value:401
          },
          {
            text:'Ledger View', value:402
          },
          {
            text:'Shares Ledger View', value:403
          },
          {
            text:'Voucher View', value:404
          },
          {
            text:'Customer View', value:405
          },
          {
            text:'Guarantor View', value:406
          },
          {
            text:'Member View', value:407
          },
          {
            text:'Master Card',value:408
          },
          {
            text:'Member Liablity View', value:409
          },
          {
            text:'Other View', value:410
          },
       ]
    });
    const reportMenu = new TreeviewItem({
      text:'Reports', value:5, children:[
        {
          text:'All Reports With Searching', value:501
        },
        {
          text:'Daily Reports', value:502
        },
        {
          text:'Statement', value:503
        },
        {
          text:'Balance Book', value:504
        },
        {
          text:'Registers', value:505
        },
        {
          text:'Denomination Reports', value:506
        },
        {
          text:'Term Deposit Reports', value:507
        },
        {
          text:'Loan Reports', value:508
        },
        {
          text:'NPA Reports', value:509
        },
        {
          text:'Shares ARR', value:510
        },
        {
          text:'Shares ADR', value:511
        },
        {
          text:'Notice', value:512
        },
        {
          text:'Other Reports', value:513
        },
        {
          text:'MIS Reports', value:514
        },
        {
          text:'Final Reports', value:515
        },
      ]
    });
    const utilityMenu = new TreeviewItem({
      text:'Utility', value:6, children:[
        {
          text:'Day Begin', value:601
        },
        {
          text:'Day End', value:602, children: [
            {text:'counter Work Day End', value:60201 },
            {text:'pigmy Day End', value:60202}
          ]
        },
        {
          text:'Back Dated Day Open', value:603
        },
        {
          text:'Receipt Printing Designing', value:604
        },
        {
          text:'Holiday', value:605
        },
        {
          text:'Interest Posting', value:606, children: [
            {text:'Interest Calculation', value:60601 },
            {text:'Interest List', value:60602 },
            {text:'Interest Passing', value:60603 }

          ]
        },
        {
          text:'Process And Calculation Menu', value:607
        },
        {
          text:'Dead Stock Process', value:608
        },
        {
          text:'Dividend', value:609, children: [
            {text:'Dividend List', value:60901 },
            {text:'Dividend Post', value:60902 }
          ]
        },
        {
          text:'Statement Head Insert', value:610
        },
        {
          text:'Change Password', value:611
        },
        {
          text:'Role Defination',value:612
        },
        {
          text:'User Defination', value:613
        },
        {
          text:'Cashier User Maintainance', value:614
        },
        {
          text:'Shares Contribution Credit To Shares', value:615
        },
        {
          text:'Silver Jubilee Amount Credit To Shares', value:616
        },
        {
          text:'Masik Bachat Deposit Withdrawl', value:617
        },
        {
          text:'Scheme Amount Transfer Entry', value:618
        },
        {
          text:'Scheme Parameters', value:619
        },
        {
          text:'Calculator', value:620
        },
        {
          text:'Remind Me', value:621
        },
        {
          text:'Data Backup', value:622
        },
        {
          text:'PataSeva Support Register', value:623
        },
        {
          text:'Sheres Data Export / Import', value:624
        },
        {
          text:'Daybook Import / Export', value:625
        },
        {
          text:'Demand Draft Data Export/ Import', value:626
        },
      ]
    });
    const windowMenu = new TreeviewItem({
      text:'Windows', value:7, children:[
        {
          text:'CaseCade', value:701
        },
        {
          text:'Tile Horizontaily', value:702
        },
        {
          text:'Tile Vertically', value:703
        },
      ]
    });
    const hotkeysMenu = new TreeviewItem({
      text:'Hot Key', value:8
    });
    const exitMenu = new TreeviewItem({
      text:'exit', value:9
    });


    return [
      masterMenu,
      transactionMenu,
      passingMenu,
      viewMenu,
      reportMenu,
      utilityMenu,
      windowMenu,
      hotkeysMenu,
      exitMenu
    ];
  }
}

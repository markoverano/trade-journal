import { Injectable } from '@angular/core';
import { JournalEntries } from './journal-entries.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class JournalEntriesService {

  formData  : JournalEntries;
  journalEntries : JournalEntries[];
  readonly rootURL ="http://localhost:54607/api"

  constructor(private http : HttpClient) { }

//   postEmployee(formData : Employee){
//    return this.http.post(this.rootURL+'/Employee',formData);
//   }

  refreshList(){
    // this.http.get(this.rootURL+'/Journal')
    
    // .subscribe(res => {
    //     this.journalEntries = res as JournalEntries[]
    //   })

        // .toPromise().then(res => 
        // this.journalEntries = res as JournalEntries[]
        // );
  }


//   putEmployee(formData : Employee){
//     return this.http.put(this.rootURL+'/Employee/'+formData.EmployeeID,formData);
     
//    }

//    deleteEmployee(id : number){
//     return this.http.delete(this.rootURL+'/Employee/'+id);
//    }
}
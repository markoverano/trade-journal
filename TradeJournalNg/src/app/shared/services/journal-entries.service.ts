import { Injectable } from '@angular/core';
import { Journal } from '../models/journal-entries.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class JournalEntriesService {

  formData  : Journal;
  Journal : Journal[];

  constructor(private http : HttpClient) { }


  getJournalEntries(){
   return this.http.get(environment.apiURL + '/Journal');
  }

  saveOrUpdateJournal(list) {
    var body = {
     Journal: list
    };

    console.log(body);
    return this.http.post(environment.apiURL + '/Journal', list);
  }
}
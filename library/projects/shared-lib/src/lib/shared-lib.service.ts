import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class   {

  sharedData = {};
  dataSubject = new Subject<any>();
  dataObserver = this.dataSubject.asObservable;

  constructor() { }
  setData(data: any) {
    this.sharedData = data;
    this.dataSubject.next(data);
  }
  getData() {
    return this.sharedData;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataTransfers {
  constructor() {}

  logMessage(Message: any) {
    console.log('This is form libaray', Message);
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTransfers } from 'aswin-data-transfer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lib-app');
  /**
   *
   */
  constructor(private data:DataTransfers ) {
    // super();
    // data.logMessage("Package Consumed");

  }
  ngOnInit()
  {
    this.data.logMessage("Package Consumed")
  }
}

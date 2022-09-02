import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BulkdataService } from './bulkdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'async-pipe';

  public serviceData!: Observable<any[]>;

    // using subscribe
// public serviceData: any = [];

  constructor(private bulkData: BulkdataService) {}

  ngOnInit(): void {
    this.getEveryData();
  }

 private getEveryData() {
    this.serviceData = this.bulkData.getAllData();
    console.log(this.serviceData);

    // using subscribe
    // this.bulkData.getAllData().subscribe((data)=>{
    //   this.serviceData = data;
    //   console.log(this.serviceData)
    // })
  }
}

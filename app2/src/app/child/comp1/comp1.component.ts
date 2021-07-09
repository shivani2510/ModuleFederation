import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  name: any;
  constructor(private dataService: SharedLibService) { }

  ngOnInit(): void {
    this.name = this.dataService.getData();
    this.dataService.dataObserver.subscribe((res) => {
      this.name=res;
    });
  }
  getData() {
    this.name = this.dataService.getData();

  }

}

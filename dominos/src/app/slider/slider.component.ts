import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  gridsize: number = 30;
  updateSetting(event) {
    this.gridsize = event.value;
    if(this.gridsize >= 40){
       alert("hello40")
    }else if(this.gridsize <= 40){
      alert("hellolessthan40")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

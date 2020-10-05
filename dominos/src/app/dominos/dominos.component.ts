import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dominos',
  templateUrl: './dominos.component.html',
  styleUrls: ['./dominos.component.scss']
})
export class DominosComponent implements OnInit {
  @ViewChild('labelRef ', { static: false }) labelRef: ElementRef;

  public diceValues: Array<number> = [0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnInit(): void {
  }
  speed: number = 30;
  updatespeedSetting(event) {
    this.speed = event.value;
    if (this.speed >= 40 && this.speed < 70) {
      [...this.labelRef.nativeElement.querySelectorAll(".even-roll")[0].style.transition = "transform 3s ease-out"];
      [...this.labelRef.nativeElement.querySelectorAll(".odd-roll")[0].style.transition = "transform 2.5s ease-out"];


    } else if (this.speed <= 40) {
      [...this.labelRef.nativeElement.querySelectorAll(".even-roll")[0].style.transition = "transform 1.5s ease-out"];
      [...this.labelRef.nativeElement.querySelectorAll(".odd-roll")[0].style.transition = "transform 1.25s ease-out"];
    } else if (this.speed >= 70) {
      [...this.labelRef.nativeElement.querySelectorAll(".even-roll")[0].style.transition = "transform 0.5s ease-out"];
      [...this.labelRef.nativeElement.querySelectorAll(".odd-roll")[0].style.transition = "transform 0.25s ease-out"];
    }
  }
  gridsize: number = 30;
  updateSetting(event) {
    this.gridsize = event.value;
    if (this.gridsize >= 40 && this.gridsize < 70) {

      [...this.labelRef.nativeElement.querySelectorAll('.die-list')[0].style.width = "10rem"];
      [...this.labelRef.nativeElement.querySelectorAll('.die-list')[0].style.height = "10rem"];
    } else if (this.gridsize <= 40) {
      [...this.labelRef.nativeElement.querySelectorAll('.die-list')[0].style.width = "8rem"];
      [...this.labelRef.nativeElement.querySelectorAll('.die-list')[0].style.height = "8rem"];
    } else if (this.gridsize >= 70) {
      [...this.labelRef.nativeElement.querySelectorAll('.die-list')[0].style.width = "12rem"];
      [...this.labelRef.nativeElement.querySelectorAll('.die-list')[0].style.height = "12rem"];
    }
  }
  rollDice() {
    let dice = [...this.labelRef.nativeElement.querySelectorAll('.die-list')];
    console.log(dice);
    dice.forEach(die => {
      this.toggleClasses(die);
      die.dataset.roll = this.getRandomNumber(1, 6);
    });

  }
  toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  diceRoll() {
    for (let i = 0; i < this.diceValues.length; i++) {
      this.diceValues[i] = Math.floor(Math.random() * 6) + 1;
    }
  }
}

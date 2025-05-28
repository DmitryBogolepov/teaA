import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy {

  constructor() { }
  public modalStatus:boolean = false;
  private timerStatus:Subscription | null = null
  ngOnInit(): void {
    this.timerStatus = timer(10000).subscribe(() =>{
      this.modalStatus = true;
    })
  }


  ngOnDestroy() {
    this.timerStatus?.unsubscribe();
    this.modalStatus = false;
  }
}

import { Component, OnDestroy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Subscription, timer } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('promoModal') promoModalRef!: TemplateRef<any>;
  private timerStatus: Subscription | null = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.timerStatus = timer(10000).subscribe(() => {
      this.openModal(this.promoModalRef);
    });
  }

  ngOnDestroy() {
    this.timerStatus?.unsubscribe();
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }
}


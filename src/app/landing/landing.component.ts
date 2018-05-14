// import * as $ from "jquery";
import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [NgbCarousel, NgbCarouselConfig]
})

export class LandingComponent implements OnInit {

    closeResult: string;
    content1: boolean;
    content2: boolean;

    @ViewChild('itineraryCarousel') itineraryCarousel: NgbCarousel;

    constructor(private modalService: NgbModal, public carouselService: NgbCarousel) {
      this.content1 = false;
      this.content2 = false;
    }

    ngOnInit() {
      // console.log()
      this.itineraryCarousel.interval = 0;
    }
  
    open(content) {
      this.modalService.open(content, {size: 'lg'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    selectSlide(id) {
      console.log(id)
    }

    showMore(content) {
      if (content == 1) {
        this.content1 = !this.content1;
      } else {
        this.content2 = !this.content2;
      }
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}

// import * as $ from "jquery";
import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [NgbCarousel]
})

export class LandingComponent implements OnInit {

    closeResult: string;

    constructor(private modalService: NgbModal, public carouselService: NgbCarousel) {}

    ngOnInit() {}
  
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

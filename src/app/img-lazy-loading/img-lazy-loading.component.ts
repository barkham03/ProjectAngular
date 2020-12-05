import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: 'translateX(0)'
})

const style2 = style({
  opacity: 0,
  transform: 'translateX(100%)'
})
@Component({
  selector: 'app-img-lazy-loading',
  templateUrl: './img-lazy-loading.component.html',
  styleUrls: ['./img-lazy-loading.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-out')),
    ])
  ]
})
export class ImgLazyLoadingComponent implements OnInit {
  state = 'hide' ;
  scrollPosition;
  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event']) // for transition
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    this.scrollPosition = window.pageYOffset + 1;
    console.log(this.scrollPosition);
    console.log(componentPosition);
    if(this.scrollPosition) {
      this.state = 'show';
    } else { this.state = 'hide'; }
  }

  ngOnInit() {
  }

}

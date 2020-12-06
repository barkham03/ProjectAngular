import { Component, OnInit, ElementRef, HostListener, Directive } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  animations: [
  ]
})

export class ListItemsComponent implements OnInit{
  elements = [1];
  count = 1;

  @HostListener('window:scroll', [])
  onscroll(): void {
    if (this.bottomReached()) {
      this.elements = [...this.elements, this.count++];
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  ngOnInit() {
    this.count <= 2 ? this.elements = [...this.elements, this.count++] : '';
  }
}
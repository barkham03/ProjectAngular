import { Component, OnInit, ElementRef, HostListener, Directive } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {itemsListing, topBrands, detailItem} from '../shared/common.mock';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  animations: [
  ]
})

export class ListItemsComponent implements OnInit {
  elements = [1];
  count = 1;
  itemsList;
  topBrand;
  someValue = 60;
  showMore = false;
  viewFor = 'listingView';
  itemsDetail;

  @HostListener('window:scroll', [])
  onscroll(): void {
    if (this.bottomReached()) {
      this.elements = [...this.elements, this.count++];
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  sliderChange(id) {
    console.log(this.someValue);
    this.itemsList.forEach(item => {
      if (id === item.id) {
        // tslint:disable-next-line:max-line-length
        let rent = this.someValue === 30 ? ((item.price + 0.08 - 0.15 + 0.13) / 12) : this.someValue === 0 ? ((item.price + 0.08 - 0.15 + 0.13) / 6) : ((item.price + 0.08 - 0.15 + 0.13) / 18);
        item.rent = parseFloat(rent.toString()).toFixed(0);
      }
    });
  }

  ngOnInit() {
    this.count <= 2 ? this.elements = [...this.elements, this.count++] : '';
    this.itemsList = itemsListing;
    this.topBrand = topBrands;
    this.itemsDetail = detailItem;
  }
}

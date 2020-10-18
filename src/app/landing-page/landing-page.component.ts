import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { MatDialog } from '@angular/material';
import {DetailsDialogComponent} from '../shared/details-dialog/details-dialog.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  current = 0;
   imgList = [
    '/assets/images/iphonePic.png',
    '/assets/images/landingPage1.png',
    '/assets/images/landingPic1.PNG'
  ];
  // imgList = [
  //   'http://barkham03.github.io/ProjectAngular/assets/images/iphonePic.png',
  //   'http://barkham03.github.io/ProjectAngular/assets/images/landingPage1.png',
  //   'http://barkham03.github.io/ProjectAngular/assets/images/benefits.PNG'
  // ];

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = {
      disableClose: false,
      panelClass: 'custom-overlay-pane-class',
      hasBackdrop: true,
      backdropClass: '',
      width: '500px',
      position: { top: '', bottom: '', left: '', right: '' },
      data: ''
    };
    const dialogRef = this.dialog.open(DetailsDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.imgList.length;
    }, 2000);
  }
}


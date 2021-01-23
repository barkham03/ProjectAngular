import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { MatDialog } from '@angular/material';
import {Router} from '@angular/router';
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
  len = new Array(5);
  current = 0;
  details = 0;
  //  imgList = [
  //   '/assets/images/iphonePic.png',
  //   '/assets/images/landingPage1.png',
  //   '/assets/images/landingPic1.PNG'
  // ];

  event_list = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      eventLocation:'New York',
      eventDescription:'NewYork sits on top of event hosting',
      img: 'https://picsum.photos/900/500?random&t=4',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      eventLocation:'Singapore',
      eventDescription:'Singapore is another great hosting city',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
  ]
  // imgList = [
  //   'http://barkham03.github.io/ProjectAngular/assets/images/iphonePic.png',
  //   'http://barkham03.github.io/ProjectAngular/assets/images/landingPage1.png',
  //   'http://barkham03.github.io/ProjectAngular/assets/images/landingPic1.PNG'
  // ];

  upcomingEvents =  this.event_list.filter( event => event.eventStartDate > new Date());
  pastEvents = this.event_list.filter(event => event.eventEndingDate < new Date());
  currentEvents =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())));

  constructor(private dialog: MatDialog, private router: Router) { }

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

  listMoreItems() {
    this.router.navigateByUrl('/list');
  }

  showDetails(seq) {
    console.log(seq);
    this.details = seq;
  }

  ngOnInit() {
  }
}


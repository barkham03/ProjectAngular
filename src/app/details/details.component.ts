import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  users: any;
  constructor(private route: ActivatedRoute, private data: DataService) {
    route.params.subscribe(params => this.users = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.users).subscribe(data1 => this.users = data1);
  }

}

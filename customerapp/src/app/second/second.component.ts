import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    setInterval(() => {
        this.sharedService.addData(new Date());
    }, 1000);
  }

}

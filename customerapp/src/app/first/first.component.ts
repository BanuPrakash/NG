import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit { 
  info:any[] = [];
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSubject().subscribe(data => {
      this.info = data;
    })
  }

}

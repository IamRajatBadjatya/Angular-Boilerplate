import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent implements OnInit {

  constructor() { }
  @Input('is-selected') isSelected = false;
  @Input('count') count: number = 0;
  @Output('change') change = new EventEmitter();

  ngOnInit() {
  }
  onClick() {
    this.isSelected = !this.isSelected;
    this.count = (this.isSelected) ? ++this.count : --this.count;

  }

}

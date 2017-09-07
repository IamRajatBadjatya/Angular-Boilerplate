import { Component, OnInit,Input, Output, EventEmitter,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[`.glyphicon { color:blue }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
 @Input() isFavorite : boolean
 @Output() change  = new EventEmitter();
  constructor() { }
  changeStar(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({isFavorite : this.isFavorite});
  }
  ngOnInit() {
  }

}

import { TestService } from './testService.service';

import { Component } from '@angular/core';

interface DataConfig {
  isFavorite: boolean;
}
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})

export class CoursesComponent {
  courses;
  viewMode = "map";
  testCustomPipe= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  courseDetails = {
    name:'Angular',
    price: 19.558,
    regDate: new Date(),
    students: 20312
  }
  items;
  likeData = {
    postContent : 'Cracked Google!',
    noOfLikes: 1,
    state: true
  }
  alternate2Way ="alternate 2 way";
  ng2Way = 'ng 2 way';
  text2Change;
  post = {
    isFavorite: false
  }
    isSelected = true;
    task = {
      taskName:'test Safe traversal',
      assignee:{
        name:'rajat'
      }
    }

  onFavoirteChanged(data: DataConfig ){
    console.log('output properties',data.isFavorite);
  }
  constructor(service: TestService){
      this.courses = service.getCourses();
  }
 addItem(){
   this.items.push({id:4,price:200});
 }
 checkById(index,item){
   return (item) ? item.id : undefined;
 }
 removeItem(item){
   this.items.splice(this.items.indexOf(item),1);

 }
 reload(){
   this.items = [
    {
      price:100,
      id:1
    },
    {
      price:400,
      id:2
    },
    {
      price:500,
      id:3
    }
  ];
 }
  testAlternate2Way(){
    console.log(this.alternate2Way);
  }
  testNg2Way(){
    console.log(this.ng2Way);
  }
  changeTab(){
    this.viewMode = (this.viewMode === 'map') ?  "list" : "map";
  }
 
}
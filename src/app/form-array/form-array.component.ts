import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  
  constructor() { }
  form =  new FormGroup({
    topics : new FormArray([])
  });
  addTopic(topic: HTMLInputElement){
    (this.topics).push(new FormControl(topic.value))
    topic.value = "";
  }
  removeItem(topic:FormControl){
    this.topics.removeAt (this.topics.controls.indexOf(topic));
  }
  get topics(){
      return this.form.get("topics") as FormArray
  }
  ngOnInit() {
  }

}

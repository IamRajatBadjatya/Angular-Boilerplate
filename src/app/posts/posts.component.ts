import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   posts;
  constructor(private service: PostService ) {

   }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    });
  }

}

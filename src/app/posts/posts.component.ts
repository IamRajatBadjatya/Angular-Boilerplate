import { BadRequestError } from './../common/bad-request-errort';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = {
      userId: 1,
      title: input.value
    }
    this.posts.splice(0,0,post); //Optimisitc approach

    input.value = "";
    this.service.create(post).subscribe(
      newPost => {
        console.log("post added successfully", newPost);
      },
      (error: AppError) => {
        this.posts.splice(0,1);
        if (error instanceof BadRequestError) {
          alert('post has already been deleted');
        } /*else {
          console.log(error);
          alert('Unexpedted error occurred');
        }*/
        else
          throw error;
      });
  }

  updatePost(post) {
    this.service.update(post).subscribe(
      updatedPost => {
        console.log("post updated successfully", updatedPost);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('post has already been deleted');
        } /*else {
          console.log(error);
          alert('Unexpedted error occurred');
        }*/
        else
          throw error;
      });
  }

  deletePost(post) {
    this.service.delete(post).subscribe(
      deletedPost => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log("post deleted successfully", deletedPost);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('post has already been deleted');
        } /*else {
          console.log(error);
          alert('Unexpedted error occurred');
        }*/
        else
          throw error;
      });
  }


}

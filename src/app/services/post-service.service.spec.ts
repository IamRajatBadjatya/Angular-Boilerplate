import { TestBed, inject } from '@angular/core/testing';

import { PostServiceService } from './post.service';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostServiceService]
    });
  });

  it('should be created', inject([PostServiceService], (service: PostServiceService) => {
    expect(service).toBeTruthy();
  }));
});

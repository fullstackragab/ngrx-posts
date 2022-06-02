import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Post } from '../models/post.model';
import { posts } from './posts.data';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(posts)
    // return throwError(() => new Error('Error loading posts'))
  }
}

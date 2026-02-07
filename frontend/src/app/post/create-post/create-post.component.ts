import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  readonly domainOptions = [
    { value: 'all', label: 'all' },
    { value: 'discussions', label: 'discussions' },
    { value: 'AI prospects', label: 'AI prospects' },
  ];

  constructor(private router: Router, private postService: PostService, private toastr: ToastrService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subredditName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subredditName: new FormControl('all', Validators.required),
      url: new FormControl(''),
      description: new FormControl('', Validators.required),
    });
  }

  createPost() {
    if (this.createPostForm.invalid) {
      this.toastr.error('Please fill in all required fields');
      return;
    }

    const subredditName = this.createPostForm.get('subredditName').value;
    if (subredditName === 'all') {
      this.toastr.error('Please choose discussions or AI prospects before posting');
      return;
    }

    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subredditName = subredditName;
    this.postPayload.url = (this.createPostForm.get('url').value || '').trim();
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.toastr.success('Post created successfully');
      this.router.navigateByUrl('/');
    }, () => {
      this.toastr.error('Create post failed. Please login again and try once more.');
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}

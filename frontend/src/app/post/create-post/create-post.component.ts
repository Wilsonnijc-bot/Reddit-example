import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';
import { ToastrService } from 'ngx-toastr';
import { VideoUploadService } from 'src/app/shared/video-upload.service';
import { finalize, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  isUploadingVideo = false;
  uploadedVideoFileName = '';
  readonly domainOptions = [
    { value: 'all', label: 'all' },
    { value: 'discussions', label: 'discussions' },
    { value: 'AI prospects', label: 'AI prospects' },
  ];

  constructor(
    private router: Router,
    private postService: PostService,
    private toastr: ToastrService,
    private videoUploadService: VideoUploadService
  ) {
    this.postPayload = {
      postName: '',
      url: '',
      videoKey: '',
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
    if (this.isUploadingVideo) {
      this.toastr.info('Video is still uploading. Please wait.');
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

  onVideoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;
    if (!file) {
      return;
    }

    this.isUploadingVideo = true;
    this.videoUploadService.createVideoUploadUrl(file.name, file.type).pipe(
      switchMap((uploadData) => this.videoUploadService.uploadVideo(uploadData.uploadUrl, file).pipe(
        tap(() => {
          this.postPayload.videoKey = uploadData.videoKey;
          this.uploadedVideoFileName = file.name;
          this.toastr.success('Video uploaded successfully');
        })
      )),
      finalize(() => {
        this.isUploadingVideo = false;
        input.value = '';
      })
    ).subscribe({
      error: () => {
        this.postPayload.videoKey = '';
        this.uploadedVideoFileName = '';
        this.toastr.error('Video upload failed');
      }
    });
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}

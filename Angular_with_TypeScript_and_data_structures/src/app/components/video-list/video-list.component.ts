import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {

  videos: { title: string; url: string }[] = [
    { title: 'Money Heist | Trailer', url: 'https://www.youtube.com/watch?v=_InqQJRqGW4' },
  ];

  newVideoTitle: string = '';
  newVideoUrl: string = '';


  addVideo() {
    if (this.newVideoTitle.trim() && this.newVideoUrl.trim()) {
      this.videos.push({
        title: this.newVideoTitle,
        url: this.newVideoUrl,
      });
      this.resetInputs();
    }
  }


  deleteVideo(video: { title: string; url: string }) {
    this.videos = this.videos.filter(v => v.title !== video.title);
  }


  resetInputs() {
    this.newVideoTitle = '';
    this.newVideoUrl = '';
  }
}

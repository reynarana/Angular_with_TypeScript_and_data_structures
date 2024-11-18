import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent {
  
  podcast: { title: string; url: string }[] = [
    { title: 'Team Payaman Usapang Pamilya', url: 'https://www.youtube.com/watch?v=Z_jZWNbkhJQ' }
  ];

  newVideoTitle: string = '';
  newVideoUrl: string = '';

  addVideo() {
    if (this.newVideoTitle.trim() && this.newVideoUrl.trim()) {
      this.podcast.push({
        title: this.newVideoTitle,
        url: this.newVideoUrl,
      });
      this.resetInputs();
    }
  }

  deleteVideo(podcast: { title: string; url: string }) {
    this.podcast = this.podcast.filter(p => p.title !== podcast.title);
  }

  resetInputs() {
    this.newVideoTitle = '';
    this.newVideoUrl = '';
  }
}

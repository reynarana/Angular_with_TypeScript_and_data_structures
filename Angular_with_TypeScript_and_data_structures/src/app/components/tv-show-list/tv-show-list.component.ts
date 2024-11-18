import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {
  tvShows: { title: string; url: string }[] = [
    { title: 'Miss Universe 2024', url: 'https://www.youtube.com/watch?v=FeKiGbGRK0c' }
  ];

  newTvShowTitle: string = '';
  newTvShowUrl: string = '';

  addTvShow() {
    if (this.newTvShowTitle.trim() && this.newTvShowUrl.trim()) {
      this.tvShows.push({
        title: this.newTvShowTitle,
        url: this.newTvShowUrl,
      });
      this.resetInputs();
    }
  }

  deleteTvShow(tvShow: { title: string; url: string }) {
    this.tvShows = this.tvShows.filter(ts => ts.title !== tvShow.title);
  }

  resetInputs() {
    this.newTvShowTitle = '';
    this.newTvShowUrl = '';
  }
}

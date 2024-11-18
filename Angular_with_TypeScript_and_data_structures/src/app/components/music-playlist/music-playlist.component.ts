import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
})
export class MusicPlaylistComponent {
  music: string[] = ['Rapstar'];
  newMusic: string = '';

  addMusic() {
    if (this.newMusic.trim()) {
      this.music.push(this.newMusic);
      this.newMusic = '';
    }
  }

  deleteMusic(music: string) {
    this.music = this.music.filter(m => m !== music);
  }
}

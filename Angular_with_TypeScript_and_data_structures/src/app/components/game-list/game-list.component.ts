import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  game: string[] = ['Grand Theft Auto'];
  newGame: string = '';

  addGame() {
    if (this.newGame.trim()) {
      this.game.push(this.newGame);
      this.newGame = '';
    }
  }

  deleteGame(game: string) {
    this.game = this.game.filter(g => g !== game);
  }
}

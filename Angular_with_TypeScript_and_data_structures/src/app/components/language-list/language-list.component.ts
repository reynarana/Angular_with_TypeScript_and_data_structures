import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
})
export class LanguageListComponent {
  language: string[] = ['Korean'];
  newLanguage: string = '';

  addLanguage() {
    if (this.newLanguage.trim()) {
      this.language.push(this.newLanguage);
      this.newLanguage = '';
    }
  }

  deleteLanguage(language: string) {
    this.language = this.language.filter(l => l !== language);
  }
}

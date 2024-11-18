import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  book: string[] = ['Example Book Title'];
  newBook: string = '';

  addBook() {
    if (this.newBook.trim()) {
      this.book.push(this.newBook);
      this.newBook = '';
    }
  }

  deleteBook(book: string) {
    this.book = this.book.filter(b => b !== book);
  }
}

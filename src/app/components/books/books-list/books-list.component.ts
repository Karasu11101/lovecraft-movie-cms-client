import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { take, first, Observable, map, delay} from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  books$: Observable<Book[]>;
  allBooks = [];

  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.getBooksAsync().pipe(
      delay(2500),
      map(books => this.allBooks = books)
    );
    this.allBooks.sort((a, b) => a.title.localeCompare(b.title));
  }
}

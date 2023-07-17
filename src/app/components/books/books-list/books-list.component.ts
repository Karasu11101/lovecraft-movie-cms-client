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
  sortedBooks = [];

  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.getBooksAsync().pipe(
      delay(2500),
      map(books => this.allBooks = books.sort(function (a, b) {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            }))
    );
  }
}

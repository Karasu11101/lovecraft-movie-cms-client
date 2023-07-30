import { Book } from './../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { BOOKS } from 'src/app/mocks/books.mock';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.onGetBooksAsync();
    console.log(this.book);
  }

  onGetBooksAsync(): void {
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];

      this.booksService.getBook(Number(id)).pipe(take(1)).subscribe(
        (res) => {
          this.book = res;
          // this.book._id = res._id,
          // this.book.title = res.title,
          // this.book.plot = res.plot,
          // this.book.image = res.image,
          // this.book.published = res.published
        }
      );
    })
  }

  goBack() {
    this.router.navigateByUrl('books');
  }
}

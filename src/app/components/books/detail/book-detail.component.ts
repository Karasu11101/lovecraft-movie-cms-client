import { Book } from './../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  }

  onGetBooksAsync(): void {
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];

      this.booksService.getBook(id).subscribe(
        res => this.book = res
      );
    })
  }

  goBack() {
    this.router.navigateByUrl('books');
  }
}

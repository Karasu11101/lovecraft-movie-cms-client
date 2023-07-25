import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BOOKS } from '../mocks/books.mock';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiBaseUrl = 'api/books';
  bookData = new ReplaySubject();

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return of (BOOKS);
    // return this.http.get<Book[]>(`${this.apiBaseUrl}/`)
  }

  getBooksAsync() {
    return of (BOOKS);
    // return this.http.get<Book[]>(`${this.apiBaseUrl}/`)
  }

  getBook(id: string): Observable<Book> {
    const book = BOOKS.find(book => book._id === Number(id));
    return of (book);
    // return this.http.get<Book>(`${this.apiBaseUrl}/${id}`)
  }

  createBook(book: Book): Observable<Book[]> {
    BOOKS.push(book);
    return of (BOOKS);
    // return this.http.post<Book>(`${this.apiBaseUrl}/`, book);
  }
}

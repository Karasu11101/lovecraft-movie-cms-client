import { BooksService } from './../../../services/books.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  @ViewChild('modalSummary', {static: false}) modal: ElementRef;

  form = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    published: new FormControl('', Validators.required),
    confirm: new FormControl(false, Validators.requiredTrue)
  })

  description: SafeHtml;
  Editor: any = DecoupledEditor;

  constructor(private router: Router,
    private booksService: BooksService,
    private bookModal: NgbModal,
    private sanitizer: DomSanitizer) {}

  onSubmit() {
    console.log(this.form.value);
    const book = {
      title: this.form.value.title,
      plot: this.form.value.description,
      image: this.form.value.image,
      published: this.form.value.published
    }
    this.booksService.createBook(book).subscribe((res: any) => {
      this.description = this.sanitizer.bypassSecurityTrustHtml(res.description);
      this.open(this.modal, res.image);
    });
  }

  open(content: any, imgUrl: string) {
    this.bookModal.open(content, {ariaLabelledBy: 'book sheet creation summary', size: 'xl', centered: true}).result
      .then((res) => {
        console.log('redirected to new book page');
        this.form.reset();
      })
      .catch((res) => {
        console.log('redirected to books page');
        this.router.navigateByUrl('books');
      })
  }

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

}

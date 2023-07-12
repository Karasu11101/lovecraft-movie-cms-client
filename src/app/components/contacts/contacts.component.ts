import { Component, ViewChild, ElementRef } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @ViewChild('messageModal', {static: false}) modalMess: ElementRef;
  Editor: any = DecoupledEditor;

  constructor(private modal: NgbModal, private message: MessageService, private router: Router) {}

  onSubmit(form) {
    console.log(form.value);
    this.open(this.modalMess);
  }

  open(content: any) {
    this.modal.open(content, {ariaLabelledBy: 'modale messaggio', size: 'xl', centered: true}).result
    .then((res) => {
      console.log('ringraziamento');
      this.message.add({severity: 'success', summary: 'Successo', detail: 'Messaggio inviato con successo!', life: 2000});
      setTimeout(() => {
        this.router.navigateByUrl('home');
      }, 2000);
    })
    .catch((res) => {
      console.log('errore pagina');
      this.message.add({severity: 'error', summary: 'Errore', detail: 'Errore durante l\'invio del messaggio!', life: 2000});
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
  }

}

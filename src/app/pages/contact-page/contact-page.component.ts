import { Component, OnDestroy, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {
  contacts$!: Observable<Contact[]>

  private contactService = inject(ContactService)

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
  }

}

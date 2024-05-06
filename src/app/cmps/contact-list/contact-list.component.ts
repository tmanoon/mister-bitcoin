import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  @Input() contacts!: Contact[] | null
  // @Output() remove = new EventEmitter<string>()
}

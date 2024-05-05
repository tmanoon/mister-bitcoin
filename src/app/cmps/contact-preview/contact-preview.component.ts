import { Component, EventEmitter, Input, OnInit, inject, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact!: Contact
  @Output() details = new EventEmitter<string>()
  @Output() selectedContactId = new EventEmitter<string>()
  isContactDetails: boolean = false

  ngOnInit(): void {
    const randNum = Math.round(Math.random() * 50)
    const randGender = Math.random() > 0.5 ? 'female' : 'male'
    this.contact.imgUrl = `https://xsgames.co/randomusers/assets/avatars/${randGender}/${randNum}.jpg`
  }

  onSelectDetails() {
    this.details.emit('contact-details')
    this.selectedContactId.emit(this.contact._id)
  }

}
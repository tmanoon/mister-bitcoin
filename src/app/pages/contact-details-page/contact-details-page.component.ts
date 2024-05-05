import { Component, Input, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable, catchError } from 'rxjs';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent implements OnInit {
  //switch to props when header work and from here i can pass contactid
  @Input() selectedContactId: string | null = null
  contact!: Contact

  private contactService = inject(ContactService)

  ngOnInit(): void {
    if (this.selectedContactId) {
      this.contactService.getContactById(this.selectedContactId).subscribe(
        (_contact: Contact) => {
          this.contact = _contact
          const randNum = Math.round(Math.random() * 50)
          const randGender = Math.random() > 0.5 ? 'female' : 'male'
          this.contact.imgUrl = `https://xsgames.co/randomusers/assets/avatars/${randGender}/${randNum}.jpg`
        }
      )
    }
  }
}
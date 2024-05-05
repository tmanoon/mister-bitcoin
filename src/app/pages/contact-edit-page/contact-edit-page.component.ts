import { Component, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable, filter, map } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss'
})

export class ContactEditPageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private contactService = inject(ContactService)

  contact = this.contactService.getEmptyContact()

  ngOnInit(): void {
    this.route.data.pipe(
      map(data => data['contact']),
      filter(contact => contact),
    ).subscribe(contact => {
      this.contact = contact
    })
  }

  onSaveContact() {
    this.contactService.saveContact(this.contact as Contact)
      .subscribe({
        next: () => this.router.navigateByUrl('/contact'),
        error: err => console.log('err:', err)
      })
  }


}

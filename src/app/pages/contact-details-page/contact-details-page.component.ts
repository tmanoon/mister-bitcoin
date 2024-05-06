import { Component, Input, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable, catchError, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent {
  //switch to props when header work and from here i can pass contactid
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  contact$: Observable<Contact> = this.route.data.pipe(
    map(data => {
      const contact: Contact = data['contact']
      const randNum = Math.round(Math.random() * 50)
      const randGender = Math.random() > 0.5 ? 'female' : 'male';
      contact.imgUrl = `https://xsgames.co/randomusers/assets/avatars/${randGender}/${randNum}.jpg`;
      return contact
    }))

    onBack() {
      this.router.navigateByUrl('/contact')
  }

}
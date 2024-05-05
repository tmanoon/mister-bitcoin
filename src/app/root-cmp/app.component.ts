import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedPage: string = 'home'; // Default selected page

  selectedContactId: string | null = null

  constructor() { }
  private contactService = inject(ContactService)
  ngOnInit(): void {
    this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err:', err)
      });
  }

  onPageSelected(page: string) {
    this.selectedPage = page
  }

  onSelectedContactId(id: string) {
    this.selectedContactId = id
  }

}

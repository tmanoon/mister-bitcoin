import { ResolveFn } from '@angular/router';
import { Contact } from '../models/contact.model';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import { ContactService } from '../services/contact.service';

export const contactResolver: ResolveFn<Contact> = (route, state) => {
    const id = route.params['id']
    const contactService = inject(ContactService)
    return contactService.getContactById(id).pipe(
        delay(1000)
    )
}
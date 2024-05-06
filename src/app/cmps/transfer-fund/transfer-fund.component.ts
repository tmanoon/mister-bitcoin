import { Component, Input, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrl: './transfer-fund.component.scss'
})

export class TransferFundComponent {
  router = inject(Router)
  @Input() contact!: Contact
  
  private userService = inject(UserService)
  private fb = inject(FormBuilder)
  transferForm!: FormGroup

  constructor() {
    this.transferForm = this.fb.group({
      amount: ['']
    })
  }

  onTransferCoins() {
    this.userService.addMoves(this.contact, this.transferForm.value.amount)
    this.router.navigateByUrl('/contact')
  }
}

import { Component, Input, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrl: './transfer-fund.component.scss'
})
export class TransferFundComponent {

  @Input() contact!: Contact
  private userService = inject(UserService)
  private fb = inject(FormBuilder)
  transferForm!: FormGroup

  constructor() {
    this.transferForm = this.fb.group({
      amount: ['']
    })
  }

  onSubmitTransfer() {
    this.userService.addMoves(this.contact, this.transferForm.value.amount)
  }

}

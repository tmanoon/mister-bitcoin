import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { notEnglishLetters } from '../../validators/user.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})

export class SignupPageComponent {
  private fb = inject(FormBuilder)
  userForm!: FormGroup
  router = inject(Router)

  userService = inject(UserService)

  constructor() {
      this.userForm = this.fb.group({
          name: ['', [notEnglishLetters]]
      })
  }

  onSaveUser() {
    this.userService.signup(this.userForm.value.name)
    this.router.navigateByUrl('/home')
  }
}

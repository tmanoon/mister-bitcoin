import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  private fb = inject(FormBuilder)
  userForm!: FormGroup

  userService = unject(UserService)
  constructor() {
      this.userForm = this.fb.group({
          name: ['', [Validators.required, notEnglishLetters], [nameTaken]],
          age: ['', [Validators.required]],
          birthDate: [this._formatTime(Date.now()), [Validators.required]],
      })
  }
}

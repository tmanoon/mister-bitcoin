import { Component, OnInit, inject } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  user!: User
  rate!: string

  private bitcoinService = inject(BitcoinService)
  private userService = inject(UserService)

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.bitcoinService.getRate(this.user.coins).subscribe(
      (rate:string) => { this.rate = rate },
      (error) => { console.log(error)}
    )
  }
}

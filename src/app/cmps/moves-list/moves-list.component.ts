import { Component, Input, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { UserService } from '../../services/user.service';
import { Move } from '../../models/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.scss'
})
export class MovesListComponent implements OnInit {

  @Input() contact!: Contact
  private userService = inject(UserService)

  user = this.userService.getUser()
  moves: Move[] | null = null

  ngOnInit(): void {
    this.moves = this.user.moves.filter(move => move.toId === this.contact._id)
    console.log(this.moves)
  }

}

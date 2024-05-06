import { Injectable } from '@angular/core';
import { Move, User } from '../models/user.model'
import { Contact } from '../models/contact.model';
import { BehaviorSubject } from 'rxjs';
import { ContactService } from './contact.service';

const ENTITY = 'user'
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  public getUser(): User {
    const user = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    return user
  }

  public signup(name: string) {
    const userToSave: User = {
      name,
      coins: 100,
      moves: []
    }
    localStorage.setItem(ENTITY, JSON.stringify(userToSave))
  }

  logout() {
    localStorage.clear()
  }

  public addMoves(contact: Contact, amount: string) {
    const userToUpdate = this.getUser()
    const move = this.getMove(contact, amount)
    userToUpdate.coins -= +amount
    userToUpdate.moves.push(move)
    localStorage.setItem(ENTITY, JSON.stringify(userToUpdate))
  }


  private getMove(contact: Contact, amount: string) {
    return {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount: +amount
    }
  }
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

import { Injectable } from '@angular/core';
import { Move, User } from '../models/user.model'
import { Contact } from '../models/contact.model';
import { BehaviorSubject } from 'rxjs';
import { ContactService } from './contact.service';

const ENTITIY = 'user'
@Injectable({
  providedIn: 'root'
})

export class UserService {

  randNames: string[] = ['Pedro', 'Salvador', 'Mariano', 'Emilia', 'Florencia', 'Carolina', 'Cris', 'Nicolas', 'Candela', 'Agustin']
  randFamilyNames: string[] = ['Oppenheimer', 'Martinez', 'Gubler', 'Moreno', 'Vazquez', 'Fernandez', 'Inchausti', 'Esposito']
  randCoinsAmount: number[] = [100, 4_000, 5_000_000, 200, 700, 20, 1000, 400, 378, 1_900, 9_000_000]

  constructor() { }

  public getUser(): User {
    return {
      name: "Ochoa Hyde",
      coins: 100,
      moves: []
    }
  }

  public signup(name: string) {
    localStorage.setItem(ENTITIY, name)
  }

  public addMoves(contact: Contact, amount: string) : Move {
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

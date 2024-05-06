import { Component, Input } from '@angular/core';
import { Move } from '../../models/user.model';

@Component({
  selector: 'moves-preview',
  templateUrl: './moves-preview.component.html',
  styleUrl: './moves-preview.component.scss'
})

export class MovesPreviewComponent {
  @Input() move!: Move

}

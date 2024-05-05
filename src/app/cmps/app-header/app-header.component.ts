import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  @Output() pageSelected = new EventEmitter<string>(); // Rename the event to pageSelected

  onSelectPage(page: string) {
    this.pageSelected.emit(page) // Emit the selected page
  }
}

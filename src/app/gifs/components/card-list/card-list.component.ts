import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  private gifsList = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];

  get gifs() {
    return this.gifsList;
  }
}

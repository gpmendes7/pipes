import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pessoa = {
    name: 'Felipe',
    status: 1,
  }

  pessoa2 = {
    name: 'Matheus',
    status: 2,
  }

  pessoa3 = {
    name: 'Luis',
    status: 3,
  }
}

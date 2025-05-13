import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-intro';

  person = {
    name: '',
    age: null
  };

  onButtonClick() {
    console.log(`Person Info: Name - ${this.person.name}, Age - ${this.person.age}`);
  }
}

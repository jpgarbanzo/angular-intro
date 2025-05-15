import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  imports: [ReactiveFormsModule],
})
export class ExampleComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^@\\s]+@[^@\\s]+\\.com$'),
    ]),
    identification: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}

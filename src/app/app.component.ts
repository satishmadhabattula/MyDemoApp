import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MyDemoApp';

  username: string = '';
  password: string = '';

  userError: string = '';
  passError: string = '';

  onSubmit() {
    this.userError = '';
    this.passError = '';

    let isValid = true;

    if (this.username.trim() === '') {
      this.userError = 'Username required';
      isValid = false;
    }

    if (this.password.trim() === '') {
      this.passError = 'password required';
      isValid = false;
    }

    if (isValid) {
      console.log({ username: this.username.trim(), password: this.password.trim() });
    }
  }

}

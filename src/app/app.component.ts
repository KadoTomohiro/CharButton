import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;

  onChange(value: number) {
    this.value = value
  }

  hex(): string {
    return this.value.toString(16)
  }
  char(): string {
    return String.fromCodePoint(this.value)
  }
}

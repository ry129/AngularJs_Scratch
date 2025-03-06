import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterModule], // ✅ Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = '../logo.jpg';
  url = 'https://www.bridgelabz.com';
  userName = '';

  ngOnInit(): void {
    this.title = 'Hello from Bridgelabz.';
  }
  onClick($event: Event) {
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import for form handling
import { MatCardModule } from '@angular/material/card'; // Import Angular Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common'; // Import CommonModule if not already done

@Component({
  selector: 'app-contact',
  standalone: true, // Standalone component
  imports: [
    CommonModule, // Required for ngIf, ngFor, etc.
    MatCardModule, // Material Card
    MatInputModule, // Material Input
    MatButtonModule, // Material Button
    MatFormFieldModule, // Material Form Field
    // NgForm // Form Handling
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted', form.value);
      alert('Message Sent Successfully!');
      form.reset();
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  avdelinger = ['Avdeling 1', 'Avdeling 2', 'Avdeling 3'];
  valgtAvdeling: string = '';

  submitForm() {
    console.log('Valgt avdeling:', this.valgtAvdeling);
    // Andre handlinger etter innsending av skjemaet...
  }
}

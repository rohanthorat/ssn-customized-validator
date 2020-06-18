import { Component } from '@angular/core';
import { FormControl, FormsModule, FormGroup } from '@angular/forms';
import { ssnInputValidator } from './ssn.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public three = 3;
  public maxlengthSSN = 11;
  public myGroup =  new FormGroup({
     ssn: new FormControl('', ssnInputValidator)
  });

  public formattingInputSSN(event): void {
    const ssn = this.getSSN().value
    const six = 6;


    if ((ssn.length === this.three || ssn.length === six) && (event.inputType !== 'deleteContentBackward') && (event.key !== '-')) {
      this.getSSN().setValue(`${ssn}-`);
    }
  }

  public getSSN() {
    return this.myGroup.get('ssn');
  }


  public addingHyphen(event: ClipboardEvent): void {
    const ssn = event.clipboardData.getData('text');
    let ssnWithDash: string;

    if (ssn && ssn.length !== this.maxlengthSSN) {
      ssnWithDash = `${ssn.substr(0, this.three)}-${ssn.substr(this.three, 2)}-${ssn.substr(5, 4)}`;
      this.getSSN().setValue(ssnWithDash);
    }
  }
}

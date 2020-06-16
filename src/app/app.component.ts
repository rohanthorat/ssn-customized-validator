import { Component } from '@angular/core';
import { FormControl, FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myGroup =  new FormGroup({
     ssn: new FormControl('')
  });
}

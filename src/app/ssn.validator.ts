import { AbstractControl } from '@angular/forms';

export function ssnInputValidator(control: AbstractControl): {[key: string]: any} | null {
  const ssnRegExPattern = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  const invalid = !ssnRegExPattern.test(control.value);

  return invalid ? { invalidSSN : {value: control.value}} : null;
}

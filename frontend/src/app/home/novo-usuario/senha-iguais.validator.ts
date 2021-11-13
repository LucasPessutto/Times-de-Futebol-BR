import { FormGroup } from '@angular/forms';

export function senhasIguais(formGroup: FormGroup): any {
  const senha = formGroup.controls.password?.value ?? '';
  const confirmaSenha = formGroup.controls.passwordConfirmed?.value ?? '';

  if (senha !== confirmaSenha) {
    return { passwordConfirmed: true };
  } else {
    null;
  }
}

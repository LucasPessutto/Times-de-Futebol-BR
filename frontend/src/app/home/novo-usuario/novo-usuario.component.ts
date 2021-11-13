import { NovoUsuarioService } from './novo-usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { senhasIguais } from './senha-iguais.validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        userName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordConfirmed: ['', [Validators.required]],
      },
      {
        validators: [senhasIguais],
      }
    );
  }

  cadastro() {
    this.novoUsuarioService.registro(this.novoUsuarioForm.value).subscribe(
      () => {
        if (this.novoUsuarioForm.valid) {
          this.router.navigate(['']);
          this.snack.open('Cadastro feito com sucesso!', 'OK', {
            duration: 3000,
          });
        }
      },
      () => {
        this.snack.open('Algo deu errado!', 'OK', { duration: 3000 });
        // alert('Algo deu errado!');
      }
    );
  }
}

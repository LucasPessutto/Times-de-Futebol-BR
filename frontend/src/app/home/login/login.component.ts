import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      () => {
        if (this.loginForm.valid) {
          this.router.navigate(['times']);
        }
      },
      (err: any) => {
        this.snack.open('Email ou senha inválidos!', 'OK', {
          duration: 3000,
        });
        // alert('Email ou senha inválidos!');
        // console.log(err);
      }
    );
  }
}

import { Router } from '@angular/router';
import { LoginService } from './../../../home/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sao-paulo',
  templateUrl: './sao-paulo.component.html',
  styleUrls: ['./sao-paulo.component.css'],
})
export class SaoPauloComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}

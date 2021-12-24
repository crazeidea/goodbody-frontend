import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { CreateUserDTO, LoginDTO } from 'src/interface/dto/auth.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submit() {
    const data: LoginDTO = this.loginForm.getRawValue();
    this.authService.login(data).subscribe((res) => {

    }, (res: HttpErrorResponse) => {

    });
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastService } from 'src/app/services/toast.service';
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
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  submit() {
    const data: LoginDTO = this.loginForm.getRawValue();
    this.authService.login(data).subscribe((res) => {
      sessionStorage.setItem('accessToken', res.accessToken);
      this.toastService.present('로그인 하였습니다.', 'light');
      this.router.navigateByUrl('/students');
    }, (res: HttpErrorResponse) => {
      this.toastService.present(res.error.message, 'danger');
    });
  }

}

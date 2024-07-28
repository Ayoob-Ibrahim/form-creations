import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerUrl, environment } from 'src/environment/environment';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  res = {
    "mainMenu": "[\"Dashboard\",\"Applications\",\"Fleet\",\"Company\",\"People\",\"Reports\",\"Credits\"]",
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbi1jYSIsImV4cCI6MTY5NTg5OTAyMiwiaWF0IjoxNjk1ODk1NDIyfQ.P7OwBXBRF_lCT3SqppHbbsdjqXUSOMgXdFUSBAilOl4VaqvJigQ-T4mnSeL8bFmGWjX9_-eacJbOfL6YhYBlEQ"
  }
  onNav(){
    this.router.navigateByUrl("dashboard");
  }


  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    role: 'user'
  });



  submitLogin() {
    let body: any = {
      username: this.loginForm.value.userName,
      password: this.loginForm.value.password,
      role: this.loginForm.value.role,
    };
    let url = ServerUrl.live + "/company";
    this.http.post(url, body).subscribe((res: any) => {
      if (res != "Invalid Username or password") {
        localStorage.setItem("mainMenu", res["mainaMenu"]);
        this.router.navigateByUrl("dashboard");
      } else {
        // this.toastr.error("Message", res);
      }
    });
  }


}

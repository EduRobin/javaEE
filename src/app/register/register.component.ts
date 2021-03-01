
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fullname: string;
  username: string;
  email: string;
  password: string;
  url = 'http://localhost:4200/OPSapimanagers/api/users/register';

  constructor( private activatedRouter: ActivatedRoute, private http: HttpClient, private router: Router) {

  }

  submit() {
    const body: User = {
      fullname: this.fullname,
      username: this.username,
      email: this.email,
      password: this.password
    };

    console.log(body);
    this.http.post(this.url, body, {observe: 'response'}).subscribe( response => {
      console.log(response);

    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}

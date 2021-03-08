import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  jmeno = '';
  heslo = '';
  user: User[] = [];
  url = 'http://localhost:4200/api/users';

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  submit() {
    const body = {
      jmeno: this.jmeno,
      heslo: this.heslo
    }
    this.http.post(this.url, body, {observe: 'response'}).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/users']);


    });
  }


}

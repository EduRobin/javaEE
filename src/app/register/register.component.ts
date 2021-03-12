import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  jmeno = '';
  heslo = '';
  user: User[] = [];
  url = '/api/users/register';

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  posli() {
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

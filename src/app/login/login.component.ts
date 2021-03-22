import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TokenHolderService} from '../token-holder.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  jmeno = '';
  heslo = '';
  user: User[] = [];
  url = '/api/users/login';

  constructor(private router: Router, private http: HttpClient, private tokenHolder: TokenHolderService) {
  }

  ngOnInit() {
  }

  posli() {
    const body = {
      jmeno: this.jmeno,
      heslo: this.heslo
    };
    if (this.heslo === this.heslo) {
      this.http.post(this.url, body).subscribe((data: {body: string}) => {
        this.tokenHolder.token = data.body;
        this.router.navigate(['/users']);
      });
    } else {
      console.log('kokot hloupej');
    }
  }

}

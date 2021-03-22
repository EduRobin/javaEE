import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TokenHolderService} from '../token-holder.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  url = 'api/users/';

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private tokenHolder: TokenHolderService) {
    this.activatedRoute.queryParams.subscribe(i => {
      console.log(i);
      this.http.get(this.url + i.id, {headers: {token: tokenHolder.token}}).subscribe((data: User) => {
        this.user = data;
        console.log(this.user);
      });
    });
  }

  ngOnInit() {
  }

}

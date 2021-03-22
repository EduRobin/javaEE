import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenHolderService} from '../token-holder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  url = 'api/users/test/';

  constructor(private http: HttpClient, private router: Router, private tokenHolder: TokenHolderService) {
    this.http.get(this.url, {headers: {token: tokenHolder.token}}  ).subscribe((data: User[]) => {
      this.users = data;
    });
  }

  smaz(id: number) {
    this.http.delete(this.url + id).subscribe((data: User) => {
      console.log(data);
    });
  }

  detaily(id: number) {
    this.router.navigate(['/user'], {queryParams: {id}});
  }

  ngOnInit() {
  }

}

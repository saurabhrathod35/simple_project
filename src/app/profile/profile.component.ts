import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  userId: String;
  user = {}

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(params =>
        this.user = this.userService.finUserById(params['userId']));
  }

}

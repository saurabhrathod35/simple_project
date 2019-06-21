import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
  users = [
    {_id: '123', username: 'alice', password: 'alice'},
    {_id: '234', username: 'bob', password: 'bob'}
  ];

  findUserByCredentials(username: String, password: String) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (username === user.username &&
        password === user.password) {
        return user;
      }
    }
    return null;
  }

  finUserById(userId) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (userId === user._id) {
        return user;
      }
    }
  }


}

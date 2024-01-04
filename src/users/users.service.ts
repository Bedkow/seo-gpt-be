import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 'xyz-123',
      name: 'Jan Kowalski',
      role: 'copywriter',
      queriesToday: 6,
      queriesTotal: 48,
    },
    {
      id: 'zzz-321',
      name: 'Żaneta Pąkiewicz',
      role: 'administrator',
      queriesToday: 0,
      queriesTotal: 5,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(userId: string) {
    const user = this.users.find((user) => {
      return user.id === userId;
    });

    if (!user) {
      console.log('user not found by Id');
    } else {
      return user;
    }
  }

  getUserByName(name: string) {
    const user = this.users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });

    if (!user) {
      console.log('user not found by name');
    } else {
      return user;
    }
  }
}


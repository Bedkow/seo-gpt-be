import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 'xyz-123',
      name: 'jan kowalski',
      role: 'copywriter',
      queriesToday: 6,
      queriesTotal: 48,
    },
    {
      id: 'zzz-321',
      name: 'żaneta pąkiewicz',
      role: 'administrator',
      queriesToday: 0,
      queriesTotal: 5,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserByName(name: string) {
    const user = this.users.find((user) => user.name == name);

    if (!user) {
      return {error: 'user not found'};
    } else {
      return user;
    }
  }

  getUserById(userId: string) {
    const user = this.users.find((user) => {
      return user.id === userId;
    });

    if (!user) {
      return {error: 'user not found'};
    } else {
      return user;
    }
  }

  createUser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
  }

  removeUser(id: string) {
    const toBeRemoved = this.getUserById(id);

    this.users = this.users.filter((user) => {
      return user.id !== id;
    });

    return toBeRemoved;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.getUserById(id);
  }
}

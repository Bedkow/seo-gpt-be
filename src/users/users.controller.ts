import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

  // GET all users
  @Get()
  getUsers() {
    return ['user1', 'user2'];
  }

  // GET user by id
  @Get(':id')
  getUserById() {
    return {};
  }

  // GET user by full name
  @Get(':full-name')
  getUserByFullName() {
    return {};
  }

  // POST new user
  @Post()
  createUser() {
    return {}
  }

  // DELETE user
  @Delete(':id')
  deleteUser() {
    return {}
  }

  // PUT modify user priviliges
  @Put(':id')
  modifyUser() {
    return {}
  }
}

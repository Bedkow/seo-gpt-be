import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  // GET user by full name
  // /users?name=jan%20kowalski
  @Get()
  getUserByFullName(@Query('name') name: string) {
    return { name };
  }

  // GET user by id
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id: id };
  }

  // GET all users
  @Get()
  getUsers() {
    return ['user1', 'user2'];
  }

  // POST new user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      id: 'xx55-24t5-gvsg',
      name: "jan kowalski",
      role: 'copywriter'
    };
  }

  // DELETE user
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return {};
  }

  // PUT update user role
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      id: 'xx55-24t5-gvsg',
      name: "jan kowalski",
      role: 'copywriter'
    };
  }
}

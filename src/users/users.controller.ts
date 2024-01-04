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
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // UsersService injectable class constructor 
  constructor(private readonly usersService: UsersService) {}

  // GET all users
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  // GET user by id
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  // GET user by full name
  // /users?name=jan%20kowalski

  //filtering
  @Get()
  getUserByName(@Query('name') name: string) {
    return this.usersService.getUserByName(name);
  }
  // route
  // @Get('name/:name')
  // getUserByName(@Query(':name') userName: string) {
  //   return this.usersService.getUserByName(userName);
  // }

  // POST new user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      id: 'xx55-24t5-gvsg',
      name: 'jan kowalski',
      role: 'copywriter',
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
      name: 'jan kowalski',
      role: 'copywriter',
    };
  }
}

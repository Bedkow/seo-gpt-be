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

  // GET user by full name
  // /users?name=jan%20kowalski
  //filtering -> TODO - bugged
  // @Get()
  // getUserByName(@Query('name') name: string) {
  //   return this.usersService.getUserByName(name);
  // }
  // route
  // @Get('name/:name')
  // getUserByName(@Query(':name') userName: string) {
  //   return this.usersService.getUserByName(userName);
  // }

  // GET user by id
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  // POST new user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // DELETE user
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }

  // PUT update user role
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}

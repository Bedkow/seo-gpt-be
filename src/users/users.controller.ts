import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET user by full name
  // OR GET all users
  // /users?name=jan%20kowalski
  @Get()
  getUserByName(@Query('name') name?: string) {
    if (name) {
      try {
        return this.usersService.getUserByName(name);
      } catch (err) {
        throw new NotFoundException(err.message);
      }
    } else {
      return this.usersService.getAllUsers();
    }
  }

  // GET user by id
  @Get(':id')
  getUserById(@Param('id'/*, ParseUUIDPipe*/) id: string) {
    try {
      return this.usersService.getUserById(id);
    } catch(err) {
      throw new NotFoundException(err.message);
    }
    
  }

  // POST new user
  @Post()
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
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

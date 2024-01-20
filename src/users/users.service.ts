import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import generatePassword from 'src/helpers/generatePassword';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    createdUser._id = uuidv4();
    createdUser.password = generatePassword(8);
    let createdUserResponse = createdUser.save();
    return createdUserResponse;
  }

  async getUserByName(name: string) {
    const user = await this.userModel.findOne({ name: name });

    if (!user) {
      throw new NotFoundException('User Not Found');
    } else {
      return user;
    }
  }

  async getUserById(_id: string) {
    const user = await this.userModel.findOne({ _id });

    if (!user) {
      throw new NotFoundException('User Not found');
    } else {
      return user;
    }
  }

  async removeUser(_id: string) {
    const result = await this.userModel.deleteOne({ _id });

    if (result.deletedCount === 0) {
      throw new NotFoundException('User Not found');
    } else {
      return {message: `User ${_id} deleted`};
    }
  }

  async updateUser(_id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userModel.findByIdAndUpdate(_id, {
      ...updateUserDto,
    });

    if (!result) {
      throw new NotFoundException('User Not found');
    } else {
      return `User ${_id} updated successfully with: ${JSON.stringify(
        updateUserDto,
      )}`;
    }
  }
}

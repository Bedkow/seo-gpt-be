import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    createdUser._id = uuidv4();
    return createdUser.save();
  }

  async getUserByName(name: string) {

    const user = await this.userModel.findOne({_name: name})

    if (!user) {
      throw new Error('User Not Found');
    } else {
      return user;
    }
  }

  async getUserById(userId: string) {

    const user = await this.userModel.findOne({_userId: userId})

    if (!user) {
      throw new Error('User Not found');
    } else {
      return user;
    }
  }

  async removeUser(userId: string) {

    const result = await this.userModel.deleteOne({_userId: userId})

    return result;
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto) {

    await this.userModel.findByIdAndUpdate(userId, {...updateUserDto}, (err, result)=> {
      if(err){
        return err
      } else {
        return result
      }
    })
  }
}

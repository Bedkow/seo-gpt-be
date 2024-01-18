import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  // private users = [
  //   {
  //     id: 'xyz-123',
  //     name: 'jan kowalski',
  //     role: 'copywriter',
  //     queriesToday: 6,
  //     queriesTotal: 48,
  //   },
  //   {
  //     id: 'zzz-321',
  //     name: 'żaneta pąkiewicz',
  //     role: 'administrator',
  //     queriesToday: 0,
  //     queriesTotal: 5,
  //   },
  // ];
  // schemas playground
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  //

  // getAllUsers() {
  //   return this.users;
  // }

  async getUserByName(name: string) {
    // const user = this.users.find((user) => user.name == name);

    const user = await this.userModel.findOne({_name: name})

    if (!user) {
      throw new Error('User Not Found');
    } else {
      return user;
    }
  }

  async getUserById(userId: string) {
    // const user = this.users.find((user) => {
    //   return user.id === userId;
    // });

    const user = await this.userModel.findOne({_userId: userId})

    if (!user) {
      throw new Error('User Not found');
    } else {
      return user;
    }
  }

  // createUser(createUserDto: CreateUserDto) {
  //   this.users.push(createUserDto);
  // }

  async removeUser(userId: string) {
    // const toBeRemoved = this.getUserById(userId);

    const result = await this.userModel.deleteOne({_userId: userId})

    // this.users = this.users.filter((user) => {
    //   return user.id !== id;
    // });

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

    // this.users = this.users.map((user) => {
    //   if (user.id === id) {
    //     return { ...user, ...updateUserDto };
    //   }
    //   return user;
    // });
    // return this.getUserById(id);
  }
}

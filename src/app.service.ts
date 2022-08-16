//After create schema and put forFeature in app.module.ts now how to make Model
import { Injectable } from '@nestjs/common';
import { UserDocument,User } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel:Model <UserDocument> // used userDocument To conver schema to model
  ){}
//create New User
  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  //Get All User
  async getAllUser(){
    return  this.userModel.find({}).then(
      user=>user
    ).catch((err)=>console.log(err))
  }
  //get Single User By ID
  async singleUser(id):Promise<User>{
    return  this.userModel.findByIdAndUpdate(id)
  }

   //Updated User By ID
   async updatedUser(id,data):Promise<User>{
    return  this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

   //Delete User By ID
   async deleteUser(id):Promise<User>{
    return  this.userModel.findByIdAndDelete(id)
  }
}

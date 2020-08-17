import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {User} from '../interfaces/user.inteface';
import { CreateUserDTO } from '../dto/user.dto';
import { create } from 'domain';
import { Observable, from } from 'rxjs';



@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){

    }
    async getUsers(): Promise<User[]>{
        
        const user = await this.userModel.find();
        return user;
        
        
    }
    async getUser(userID?: string): Promise<User>{
        const user = this.userModel.findById(userID);
        return user;
    }
    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
       const user = new this.userModel(createUserDTO);
       return await user.save();
    }
    async deleteUser(userID?:string): Promise<User>{
       const deletedUser = await this.userModel.findByIdAndDelete(userID);
       return deletedUser;
    }
    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User>{
        const updateUser = await this.userModel.findByIdAndUpdate(userID,
            createUserDTO, {new: true});
            return updateUser;

    }
    
}

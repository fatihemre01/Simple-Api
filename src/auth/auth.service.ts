import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async register(dto: AuthDto) {
    const newUser = new this.userModel(dto);
    return await newUser.save();
  }
}

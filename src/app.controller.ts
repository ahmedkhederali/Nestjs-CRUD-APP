import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { UserUpdateDto } from './userUpdate.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Home Page
  @Get()
  getHello(): string {
    return 'Home';
  }
  //Create New User
  @Post('/create')
  async create(@Body() userDto: User) {
    // Body == req.body in express js
    return this.appService.create(userDto);
  }
  // Get all Users
  @Get('/allusers')
  async getAllUser() {
    return this.appService.getAllUser();
  }
  // Get Single User By ID
  @Get(':id')
  async singleUser(
    @Param('id') id: string, // get data From Params
  ): Promise<User> {
    return this.appService.singleUser(id);
  }
  // Update User By ID
  @Put(':id')
  async updatedUser(
    @Param('id') id: string, // get data From Params
    @Body() updateDto: UserUpdateDto, // get data From Body
  ) {
    return this.appService.updatedUser(id, updateDto);
  }

  // delete User By ID
  @Delete(':id')
  async deleteUser(
    @Param('id') id: string, // get data From Params
  ) {
    return this.appService.deleteUser(id);
  }
}

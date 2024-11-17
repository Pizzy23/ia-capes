import { Controller, Post, Get, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserService } from 'src/context/service';
import { CreateUserDto, UpdateUserDto } from 'src/view/dto';


@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID', type: Number })
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', description: 'User ID', type: Number })
  @ApiBody({ type: UpdateUserDto })
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(id, body);
  }

  @Get()
  @ApiOperation({ summary: 'Find users by filter' })
  async findUsers(@Body() filter: any) {
    return this.userService.findUsers(filter);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count users by filter' })
  async countUsers(@Body() filter: any) {
    return this.userService.countUsers(filter);
  }
}

import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  findAll(@Param('id') id: string) {
    return {
      user: {
        id: id,
      },
    };
  }
  @Post(':id')
  create(@Param('id') id: string) {
    return {
      'user created': { id: id },
    };
  }
}

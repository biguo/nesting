import { Controller, Get, Post, Delete, HttpCode, Header, Redirect, Query, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  @Header('Cache-Control', 'max-age=0')
  findAll(): string {
    return 'This action returns all cats !';
  }

  @Get('more')
  async findMore(): Promise<any[]> {
    return [];
  }

  @Delete()
  remove(): string {
    return 'This action remove a cats !';
  }

  @Get(':id')       ///cats/1
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get('docs')      ///cats/docs?version=5
  @Redirect('https://www.itying.com/nestjs/article-index-id-109.html', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }


}
import { Controller, Get, Post, Body, Put, Patch, Param, Delete, HttpException,
  HttpStatus, } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ObjectId } from 'mongoose';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createUserDto: CreateBookDto) {

    try {
      return this.booksService.create(createUserDto);
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Não foi possível',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }


  @Get()
  findAll() {
    try {
      return this.booksService.findAll();
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Não foi possível encontrar livros',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    try {
      return this.booksService.findOne(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Não foi possível encontrar livros',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateBookDto) {
    try {
      return this.booksService.update(id, updateUserDto);
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Não foi possível encontrar livros',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
 }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    try {
      return this.booksService.remove(id:);
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Não foi possível encontrar livros',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
}

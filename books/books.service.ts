import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  create(createUserDto: CreateBookDto) {
    const createdBooks = this.bookModel.create();
    return createdBooks;
  }

  findAll() {
    const findedBooks = this.bookModel.find();
    return findedBooks;
  }

  findOne(id: ObjectId) {
    const findedBook = this.bookModel.findById(id);
    return findedBook;
  }

  update(id: ObjectId, updateBookDto: UpdateBookDto) {
    const updatedBook = this.bookModel.findByIdAndUpdate(
      id,
      {
        name: updateBookDto.name,
        age: updateBookDto.author,
        email: updateBookDto.isbn,
      },
      { new: true },
    );

    return updatedBook;
  }

  async remove(id: ObjectId) {
    await this.bookModel.deleteOne({ _id: id });

    return 'OK';
  }
}
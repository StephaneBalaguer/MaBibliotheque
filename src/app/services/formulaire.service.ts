import { Injectable } from '@angular/core';
import { Book, Status } from '../models/book.model';
import { auth } from 'firebase';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  nbook: Book = new Book('','');
  
  constructor(private bookService: BooksService) { }

  saveetape1(titre: string, author: string){
    this.nbook.title = titre;
    this.nbook.author = author;
  }

  saveetape2(status: Status, note: number){
    this.nbook.etat = status;
    this.nbook.note = note;
  }

  saveetape3(synopsis: string){
    this.nbook.synopsis = synopsis;
    this.bookService.createNewBook(this.nbook);
  }

  effacer(){
    this.nbook.author=null;
    this.nbook.title=null;
    this.nbook.note=null;
    this.nbook.synopsis=null;
    
  }


}

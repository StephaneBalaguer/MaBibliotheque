import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, Status } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  util = Status;

  constructor(private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

 

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      statut: ['', Validators.required],
      note:[''],
      synopsis: ''
    });
  }

  onSaveBook() {
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const synopsis = this.bookForm.get('synopsis').value;
    const etat = this.bookForm.get('statut').value;
    const note = this.bookForm.get('note').value;
    const newBook = new Book(title, author);
    newBook.etat = etat;
    newBook.note = note;
    newBook.synopsis = synopsis;
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

  onAnnuler() {
    this.router.navigate(['/books']);
  }

  displaynote = 10;

  lavaleurduslider() {
    this.displaynote = this.bookForm  .get('note').value;
  }

}


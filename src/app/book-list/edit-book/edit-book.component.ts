import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, Status } from '../../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  util = Status;

  // bookEditForm: FormGroup;

  bookEditForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    statut: ['', Validators.required],
    note: ['', Validators.required],
    synopsis: ''
  });

  constructor(private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute) { }


  id: any;
  book: Book;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+this.id).then(
      (book: Book) => {
        this.book = book;
        this.initForm();
      }
    )
  }



  initForm() {
    this.bookEditForm.setValue({
      title: this.book.title,
      author: this.book.author,
      synopsis: this.book.synopsis,
      statut: this.book.etat,
      note: this.book.note,

    });
    this.displaynote = this.book.note;
  }

  onSaveBook() {
    const title = this.bookEditForm.get('title').value;
    const author = this.bookEditForm.get('author').value;
    const synopsis = this.bookEditForm.get('synopsis').value;
    const statut = this.bookEditForm.get('statut').value;
    const note = this.bookEditForm.get('note').value;
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    newBook.note = note;
    newBook.etat = statut;
    this.booksService.editOneBook(this.id, newBook);
    this.router.navigate(['/books']);
  }

  onAnnuler() {
    this.router.navigate(['/books']);
  }

  displaynote = 10;

  lavaleurduslider() {
    this.displaynote = this.bookEditForm.get('note').value;
  }
}

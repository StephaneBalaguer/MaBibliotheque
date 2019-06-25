import { Component, OnInit } from '@angular/core';
import { Book, Status } from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  book: Book;
  id: any;

  util = Status;
  constructor(private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router) { }

  ngOnInit() {

    this.book = new Book('', '');
    this.id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+this.id).then(
      (book: Book) => {
        this.book = book;
      }
    )
  }

  onBack() {
    this.router.navigate(['/books']);
  }

  onEdit() {
    this.router.navigate(['/books', 'edit', this.id]);
  }

  onDelete() {
    this.booksService.removeBooks(this.book);
    this.router.navigate(['/books']);
  }
}

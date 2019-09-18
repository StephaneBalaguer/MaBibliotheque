import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/book.model';
import { FormulaireService } from 'src/app/services/formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  util = Status;


  bookForm: FormGroup;

  etapeformulaire: number;
  constructor(private formBuilder: FormBuilder,
    private booksService: BooksService,
    private formulaireService: FormulaireService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.etapeformulaire = this.route.snapshot.params['id'];
    console.log(this.etapeformulaire);
  }

  /*
    this.myGroup = new FormGroup({ firstName: new FormControl() });
  
  */




  etape_suivante() {
    if (this.etapeformulaire < 3) {
      this.etapeformulaire++;
      this.router.navigate(['books', 'formulaire', this.etapeformulaire]);
    }
  }
  etape_precedante() {
    if(this.etapeformulaire == 1){
      this.formulaireService.effacer();
      this.router.navigate(['books']);
    }
    if (this.etapeformulaire > 1) {
      this.etapeformulaire--;
      this.router.navigate(['books', 'formulaire', this.etapeformulaire]);
    }
  }







  onSubmit(data) {
    if (this.etapeformulaire == 1) {
      console.log("etape 1 ");
      console.log(data.title);
      console.log(data.author);
      this.formulaireService.saveetape1(data.title, data.author);
      this.etape_suivante();
      
    }
   else if (this.etapeformulaire == 2) {
      console.log("etape 2 ");
      console.log(data.statut);
      console.log(data.note);
      this.formulaireService.saveetape2(Status.R, data.note);
      this.etape_suivante();

    }
   else if (this.etapeformulaire == 3) {
      console.log("etape 3 ");
      console.log(data.synopsis);
      this.formulaireService.saveetape3(data.synopsis);
      this.router.navigate(['books']);
    }
  }
  displaynote = 10;

  lavaleurduslider(data) {
    this.displaynote = data.note;
  }

}

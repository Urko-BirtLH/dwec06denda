import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  private _router: Router;
  constructor(_router: Router) {
    this._router = _router;
   }

  ngOnInit(): void {

    // Redirigir a la página de inicio
    setTimeout(() => this._router.navigate(['/']), 3000);

  }

}

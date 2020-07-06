import { Gnome } from './../model/gnome';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gnome-card',
  templateUrl: './gnome-card.component.html',
  styleUrls: ['./gnome-card.component.css']
})
export class GnomeCardComponent implements OnInit {

  @Input('gnome') gnome: Gnome;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // console.log(this.gnome)
  }

  changePage(){
    this.router.navigate(['/gnome/' + this.gnome.id]);
  }
}

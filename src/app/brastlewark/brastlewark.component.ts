import { Gnome } from './../model/gnome';
import { Component, OnInit } from '@angular/core';
import { GnomesService } from '../service/gnomes.service';

@Component({
  selector: 'app-brastlewark',
  templateUrl: './brastlewark.component.html',
  styleUrls: ['./brastlewark.component.css']
})
export class BrastlewarkComponent implements OnInit {

  constructor(
    private gnomesService: GnomesService,
  ) { }
    gnomes : Gnome[];
    term: string;

  ngOnInit() {
    this.gnomesService.Search().subscribe(data => {
      this.gnomes = data;
    })
  }

  // filter(value){
  //   console.log(this.gnomes.filter( element => element.age >= 288 ))
  //   console.log(value)
  // }
}

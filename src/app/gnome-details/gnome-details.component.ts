import { GnomesService } from './../service/gnomes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gnome } from '../model/gnome';

@Component({
  selector: 'app-gnome-details',
  templateUrl: './gnome-details.component.html',
  styleUrls: ['./gnome-details.component.css']
})
export class GnomeDetailsComponent implements OnInit {

  gnomeId: string;
  gnome: Gnome;
  gender: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gnomesService: GnomesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.gnomeId = params.id;
    });
   }

  ngOnInit() {
    this.gnomesService.getGnome(this.gnomeId).subscribe(data =>{
      this.gnome = data;
      this.gnome.height = Math.round(data.height * 100) / 100;
      this.gnome.weight = Math.round(data.weight * 100) / 100;
    });
    this.setGender();
  }

  setGender(){
    var max = 3;
    var min = 1;
    var randomNumber = Math.round(Math.random() * (max - min) + min);
    if(randomNumber === 1){
      this.gender = 'Female';
    }else if(randomNumber === 2){
      this.gender = 'Male';
    }else if(randomNumber === 3){
      this.gender = 'Gender fluid';
    }
  }

}

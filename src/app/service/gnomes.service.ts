import { Gnome } from './../model/gnome';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GnomesService {
  url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

  constructor(private http: HttpClient) {
    this.gnomes = null;
  }
  private ApiResult;
  private gnomes: Gnome[];



  Search() {

    return this.http.get(this.url).pipe(map(result => {
      return result['Brastlewark'];
    }));
  }

  getGnome(position: string){
    var y: number = +position
    return this.http.get(this.url).pipe(map(result => {
      return result['Brastlewark'][y];
    }));
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json"

  constructor(private _http: Http) { }

  
  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(response =>  response.json());
  }

  
}

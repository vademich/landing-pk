import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => { data
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/db.json");
  }
}

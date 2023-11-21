import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Game {

}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "http://localhost:3000/api";

  games$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  // get all
  getAllGames(): void {
    this.http.get<any[]>(`${this.baseURL}/games`).subscribe(result => {
      console.log("get all games at service", result);
      this.games$.next(result);
    });
  }

  test: any[] = [
    {id: 1, name: "toast"},
    {id: 2, name: "toast 2"},
    {id: 3, name: "toast 3"},
  ]

  getOneGame(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/games/${id}`);
  }
  
  // get one by id
  // create new
  createGame(game: any): void {
    this.http.post<any>(`${this.baseURL}/games`, game).subscribe(result => {
      this.getAllGames();
    })
  }

  // update existing
  // delete by id
  deleteGame(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/games/${id}`);
  }
}

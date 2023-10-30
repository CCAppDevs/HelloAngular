import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Game {

}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "htttp://localhost:3000/api";

  private dataArray: any[] = [
    { name: "toast", id: 1 },
    { name: "toast 1", id: 2 },
    { name: "toast 2", id: 3 }
  ];

  mockGameArray$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.dataArray);

  constructor(private http: HttpClient) { }

  // get all
  getAllGames(): void {
    this.dataArray.push({ name: "New Value", id: 0 });
    this.mockGameArray$.next(this.dataArray);
  }
  
  // get one by id
  // create new
  // update existing
  // delete by id
}

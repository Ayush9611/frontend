import { Injectable } from '@angular/core';
import { Board } from '../shared/models/Board';
import { sample_boards } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getAll():Board[]{
    return sample_boards;
  }

  getAllBoardsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) )
  }
}
// FLORA flora

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
import { Board } from 'src/app/shared/models/Board';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  boards:Board[] = [];
  constructor(private boardservice:BoardService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) =>  {
      if(params.searchTerm)
      this.boards = this.boardservice.getAllBoardsBySearchTerm(params.searchTerm);
      else
      this.boards = boardservice.getAll();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeDatabase';
import { psnGame } from 'src/app/models/psnGame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  gamesData:psnGame[] = []
  private gameTemplate:psnGame = { 
    id: 0,
    name: "",
    price: "",
    coverImage: "",
    consoles: []
  }

   ngOnInit(): void {
       for (let game of fakeData) {
        this.gameTemplate = {
          id: game.id,
          name: game.name,
          price: game.price,
          coverImage: game.coverImage,
          consoles: game.consoles
        }
        this.gamesData.push(this.gameTemplate)
       } 

       console.log(this.gamesData);
       
   }
}

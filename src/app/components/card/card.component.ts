import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  @Input()
  gameTypes:string[] = [""];
  @Input()
  gameCover:string = "";
  @Input()
  cardLabel:string = "";
  @Input()
  gamePrice:string = "";

  gameType:string = ""
  constructor(){
  }

  ngOnInit(): void {
      this.gameType = this.gameTypes.join(" | ");
  }
  
}

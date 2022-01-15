import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lol, Fortnite, Fifa, Valorant, Rocket, Gta, ListLiveLol, ListLiveValorant } from 'src/data/games'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameName: string = ''

  informationGame: any

  listLives: any = ListLiveLol

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.router.navigate([this.router.url])
    
    this.activatedRouter.queryParams.subscribe(
      response => {
        this.gameName = response.game
        
        if (this.gameName == 'League of Legends') {
          this.informationGame = Lol
          this.listLives = ListLiveLol
        } else if (this.gameName == 'VALORANT') {
          this.informationGame = Valorant
          this.listLives = ListLiveValorant
        } else if (this.gameName == 'Rocket League') {
          this.informationGame = Rocket
        } else if (this.gameName == 'Grand Theft Auto V') {
          this.informationGame = Gta
        } else if (this.gameName == 'FIFA 22') {
          this.informationGame = Fifa
        } else if (this.gameName == 'Fortnite') {
          this.informationGame = Fortnite
        }
      }
    )
      
  }
    
}
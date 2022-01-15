import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recommended } from 'src/data/recommended';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendedList: any = Recommended

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.navigate([this.router.url])
  
  }

  games(name: string) {
    this.router.navigate(['/game'], { queryParams: { game: `${name}` } })
  }

}

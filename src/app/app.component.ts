import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Channels } from 'src/data/channels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'twitch';

  listChannels: any = Channels

  constructor(private router: Router) { }

  link() {
    this.router.navigate(['live'])
  }
  
  home() {
    this.router.navigate(['home'])
  }

}

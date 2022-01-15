import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Messages } from 'src/data/messages';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  
  chatMessages: any = []
  value: number = 0

  constructor() { }

  ngOnInit(): void {

    const timer = setInterval(() => {
      this.chatMessages.push(Messages[this.value])
      this.value += 1

      if(this.chatMessages.length >= Messages.length) {
        clearInterval(timer)
      }

    }, 1000)

  }

}

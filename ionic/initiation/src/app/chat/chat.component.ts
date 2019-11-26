import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {

  public chat: any;
  private souscription: Subscription;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.randomChat();
  }

  ngOnDestroy(){
    if(this.souscription){
      this.souscription.unsubscribe();
    }
  }

  randomChat(){
    this.souscription = this.chatService.getChat()
    .subscribe(
      resp => {
        this.chat = resp;
        console.log(resp.images);
      }
    );
  }

}

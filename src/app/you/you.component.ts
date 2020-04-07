import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-you',
  templateUrl: './you.component.html',
  styleUrls: ['./you.component.css']
})


export class YouComponent implements OnInit {

  todayNumber: number = Date.now();
  
  today=new Date();
  msg:string=' ';
  // me [];
  msgs=[];
  rcvMsgs=[];
  constructor(private friend:FriendService ) { }

  ngOnInit() {
    this.friend.sub1.subscribe(
      data=>{
        this.msg=data;

        if(this.msg!=""){
          let mark = new Person(this.msg,false);
           this.msgs.push(mark);
        }

      }
      )
  }
  
  sendMessage(obj){
    this.msg=obj.value;
    this.friend.sub.next(this.msg=obj.value);
    if(this.msg!=""){
      let mark = new Person(obj.value,true);
    this.msgs.push(mark) ;

    }
    obj.value=""

  }
 
}



class Person {
  constructor(public massege: string, 
              public status: boolean){}
}


import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';


@Component({
  selector: 'app-someone',
  templateUrl: './someone.component.html',
  styleUrls: ['./someone.component.css']
})



export class SomeoneComponent implements OnInit {
  //  ms=[];
  // msgs:string[];
  msgs=[];
  // rcvMsgs=[];
  recv_msg=' ';
  today=new Date();
  todayNumber: number = Date.now();
  
  

  constructor(private friend : FriendService) { }

  ngOnInit() {
    this.friend.sub.subscribe(
      data=>{
        this.recv_msg=data;
        if(this.recv_msg!=""){
          let mark = new Person(this.recv_msg,false);
           this.msgs.push(mark);
        }
      }
      )
  }
  

  sendMessage(obj){
    // this.recv_msg=value;
    this.friend.sub1.next(this.recv_msg=obj.value);
    if(this.recv_msg!=""){
      let mark = new Person(obj.value,true);
    this.msgs.push(mark) ;

    }
    // this.recv_msg=""; 
    obj.value="";

  }

}



class Person {
  constructor(public massege: string, 
              public status: boolean){}
}

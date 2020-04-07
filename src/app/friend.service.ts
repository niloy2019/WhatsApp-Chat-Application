import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  sub=new Subject<string>();
  sub1=new Subject<string>();

  constructor() { }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
// tajo moi thuoc tinh de componrt cha cos the truyen du lieu vao component con
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}

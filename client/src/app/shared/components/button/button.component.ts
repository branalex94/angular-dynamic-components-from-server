import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit{

  @Input() type = '';
  @Input() shape = '';
  @Input() size = '';
  @Input() round = '';
  @Input() background = '';
  @Input() padding = '';
  @Input() disabled!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

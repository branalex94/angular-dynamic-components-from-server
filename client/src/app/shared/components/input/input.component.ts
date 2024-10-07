import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{

  @Input() state:string = "";
  @Input() stateEffect:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  /*
  public form!: FormGroup;

  @Input() inputLabel = '';
  @Input() inputType = 'text';
  @Input() controlName = '';

  constructor(private readonly _controlContainer: ControlContainer) {}
  
  ngOnInit(): void {
    this.form = <FormGroup>this._controlContainer.control;
  }*/
}

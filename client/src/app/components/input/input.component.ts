import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, Form, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  public form!: FormGroup;

  @Input() inputLabel = '';
  @Input() inputType = 'text';
  @Input() controlName = '';

  constructor(private readonly _controlContainer: ControlContainer) {}
  
  ngOnInit(): void {
    this.form = <FormGroup>this._controlContainer.control;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-laboral',
  standalone: true,
  imports: [
    NzGridModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './info-laboral.component.html',
  styleUrl: './info-laboral.component.scss'
})
export class InfoLaboralComponent implements OnInit{

  @Input() parentForm!:FormGroup;  
  form:FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      direccion: [null],
      correo: [null],
      nombre: [null, [Validators.required]],
      ingresos: [null]
    });
  }

  ngOnInit(){
    this.parentForm.addControl('infoLaboral', this.form);    
    
  }

}

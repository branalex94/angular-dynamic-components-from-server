import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-financiera',
  standalone: true,
  imports: [
    NzGridModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './info-financiera.component.html',
  styleUrl: './info-financiera.component.scss'
})
export class InfoFinancieraComponent {

  @Input() parentForm!:FormGroup;  
  form:FormGroup;


  constructor(private fb:FormBuilder

  ){
    this.form = this.fb.group({
      activos: [null],
      pasivos: [null],
      ingresos: [null, [Validators.required]],
    })
  }

  ngOnInit(){
    this.parentForm.addControl('infoFinanciera', this.form);  
  }


}

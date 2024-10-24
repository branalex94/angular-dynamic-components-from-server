import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class InfoFinancieraComponent implements ControlValueAccessor {
  public value = '';

  @Input() parentForm!:FormGroup;
  form:FormGroup;

  private _onChange: (value: any) => void = () => {};
  private _onTouch: () => void = () => {};

  constructor(private fb:FormBuilder

  ){
    this.form = this.fb.group({
      activos: [null],
      pasivos: [null],
      ingresos: [null, [Validators.required]],
    })
  }

  // Ejemplo de metodos de interfaz controlvalueaccesor para manejar componente como input
  // generico usado en un formulario reactivo
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(){
    this.parentForm.addControl('infoFinanciera', this.form);
  }


}

import { Injectable, Type } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentMappingService {

  private _componentMapping: { [key: string]: () => Promise<Type<any>> } = {
    'InfoLaboralComponent': () => import('./../sections/info-laboral/info-laboral.component').then(m => m.InfoLaboralComponent),
    'InfoFinancieraComponent': () => import('./../sections/info-financiera/info-financiera.component').then(m => m.InfoFinancieraComponent),
  };

  constructor() { }

  getComponentFromMap(componentKey: string) {
    return this._componentMapping[componentKey];
  }

  formTouched(form: any) {
    form.markAllAsTouched();
    Object.keys(form.controls).forEach((key) => {
      const control: any = form.get(key);
      if(control?.controls){
        this.formTouched(control);
      }else{
        control.markAsDirty();
      }
    });
  }  

}

import { Injectable, Type } from '@angular/core';
import { InputComponent } from '../components/input/input.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentMappingService {

  private _componentMapping: { [key: string]: Type<any> } = {
    'inputcomponent': InputComponent
  }

  constructor() { }

  getComponentFromMap(componentKey: string) {
    return this._componentMapping[componentKey];
  }
}

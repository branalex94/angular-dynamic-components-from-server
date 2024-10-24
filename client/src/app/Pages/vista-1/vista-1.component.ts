import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentMappingService } from '../../services/component-mapping.service';
import { InfoLaboralComponent } from "../../sections/info-laboral/info-laboral.component";
import { InfoFinancieraComponent } from "../../sections/info-financiera/info-financiera.component";
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-vista-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent
    /*
    InfoLaboralComponent,
    InfoFinancieraComponent,
    ButtonComponent*/
  ],
  templateUrl: './vista-1.component.html',
  styleUrl: './vista-1.component.scss'
})
export class Vista1Component {

  @ViewChild('container', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  form:FormGroup;

  sectionInfo:any;

  jsonSend:any = {};

  constructor(
    private readonly _http: HttpClient,
    private readonly _componentMappingService: ComponentMappingService,
    private readonly _fb: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.form = this._fb.group({});
  }

  ngOnInit(): void {
    this._http.get('http://localhost:8000/section').subscribe({
      next: async (val: any) => {

        // Limpiar el contenedor de componentes previamente cargados
        this.viewContainerRef.clear();

        this.sectionInfo = val['data'].fields;

        for(let section of this.sectionInfo){
          if (
            this._componentMappingService.getComponentFromMap(section.component)
          ) {
            await this.loadComponent(section.component, section.data);
          }
        }

      },
    });
  }

  handleSubmit() {
    if(this.form.valid){
      for(let section of this.sectionInfo){
        this.jsonSend[section.keyForm] = this.form.get(section.keyForm)!.value;
      }
      console.log(this.jsonSend);
    }else{
      this._componentMappingService.formTouched(this.form);
    }
  }

  loadComponent(componentKey: string, params: { styling: any, inputData?: any }) {

    return new Promise<void>(async (resolve, reject)=>{

      // Obtener el "loader" del componente desde el mapeo
      const componentLoader = this._componentMappingService.getComponentFromMap(componentKey);

      if (componentLoader) {
        // Cargar el componente dinámicamente usando import()
        const componentToLoad = await componentLoader();

        // Crear el componente directamente sin necesidad de resolver la fábrica
        const componentRef = this.viewContainerRef.createComponent(componentToLoad);
        if (!!Object.keys(params?.styling).length) {
          for (const key of Object.keys(params.styling)) {
            componentRef.location.nativeElement.style[key] = params.styling[key];
          }
        }

        // Pasar el FormGroup principal al componente hijo
        // Cada componente hijo debe añadir su subgrupo de controles
        (componentRef.instance as any).parentForm = this.form;

      } else {
        console.error(`El componente con clave "${componentKey}" no existe en el mapeo.`);
      }

      resolve();
    })
  }


}

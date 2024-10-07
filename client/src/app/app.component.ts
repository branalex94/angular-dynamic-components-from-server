import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ComponentMappingService } from './services/component-mapping.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  //form: FormGroup;

  constructor(
    private readonly _http: HttpClient,
    private readonly _componentMappingService: ComponentMappingService,
    private readonly _fb: FormBuilder
  ) {
    //this.form = this._fb.group({});
  }

  ngOnInit(): void {
    /*this._http.get('http://localhost:8000').subscribe({
      next: (val: any) => {
        val['data'].fields.map((field: any) => {
          if (
            this._componentMappingService.getComponentFromMap(field.component)
          ) {
            const componentRef = this.viewContainerRef.createComponent(
              this._componentMappingService.getComponentFromMap(field.component)
            );
            Object.keys(field.data).map((key) => {
              const control = new FormControl('', []);
              this.form.addControl(field.data['controlName'], control);
              componentRef.instance[key] = field.data[key];
              componentRef.instance['form'] = this.form;
            })
          }
        });
      },
    });*/
  }

  handleSubmit() {}
}

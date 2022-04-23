import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup

  get sintomas(): FormArray {
    return this.form.get('sintomas') as FormArray
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      sintomas: this.formBuilder.array([]),
    })
  }

  removeSintomas(index: number) {
    this.sintomas.removeAt(index)
  }

  addSintomas() {
    this.sintomas.push(this.formBuilder.group({name: ''}))
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { element } from 'protractor';

@Component({
  selector: 'app-cgpa',
  templateUrl: './cgpa.component.html',
  styleUrls: ['./cgpa.component.scss']
})
export class CgpaComponent implements OnInit {
  productForm: FormGroup;
  average: any;
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      quantities: this.fb.array([]),
    });
  }
  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }
  onSubmit() {
    console.log(JSON.stringify(this.productForm.value));
    let userIndex = (<FormArray>this.productForm.get('quantities')).length;
    this.average = 0;
    this.productForm.get('quantities').value.forEach(x => {
      this.average += +x.price / userIndex;
    });
    console.log(this.average);
  }

  ngOnInit(): void {
  }

}

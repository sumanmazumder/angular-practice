import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, Validators, FormControl, FormArray, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public mainForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    contact: new FormArray([])
  })
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  // contact Person Add
  contactPersonArray():FormArray{
    return this.mainForm.get('contact') as FormArray;
  }
  contactPersonObject():FormGroup{
    return this.formBuilder.group({
      cPersonName: new FormControl(null),
      cPersonEmail: new FormControl(null,),
      contactNumbers: new FormArray([])
    })
  }

  addContactPerson(): void{
    const contact = this.mainForm.get('contact') as FormArray;
    contact.push(this.contactPersonObject());
    console.log(this.mainForm);
  }
  removeContactPerson(index:number): void{
    return (this.mainForm.get('contact') as FormArray).removeAt(index);
  }

  // contact Number Add
  contactNumberArray(index:number): FormArray{
    return (this.mainForm.get('contact') as FormArray).controls[index].get('contactNumbers') as FormArray;
  }
  contactNumberObject(): FormGroup{
    return this.formBuilder.group({
      cPersonNumber: new FormControl(null)
    })
  }
  addContactNumber(index:number):void{
    console.log(index);
    const contactNunber = (this.mainForm?.get('contact') as FormArray).controls[index]?.get('contactNumbers') as FormArray;
    contactNunber.push(this.contactNumberObject());
  }


  ngOnInit(): void {
  }

}

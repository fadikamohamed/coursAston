import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrls: ['./demo-bindings.component.scss'],
})
export class DemoBindingsComponent implements OnInit {

  public form: FormGroup;
  public ville: string= "Lille";

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        age: new FormControl('26', Validators.max(120)),
        password: new FormControl('', [Validators.pattern(/[\d]*/), Validators.required])
      }
    );
   }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value);
  }

  resetVille(){
    this.ville = "Lille";
  }

}

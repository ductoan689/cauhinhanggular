import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  dataForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initFormStructure();
  }
  private initFormStructure(): void {
    this.dataForm = new FormGroup({
      password: new FormControl(''),
      name: new FormControl(''),
     
      
    });
  }
  onSave(){
    console.log(this.dataForm);
    
}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 alluserdata=[]
 
 private userdata:FormGroup
 
constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.userdata = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  logForm(){
    console.log(this.userdata.value)
  }
  
}



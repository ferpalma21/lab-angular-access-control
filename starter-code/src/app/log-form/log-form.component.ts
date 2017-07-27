import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../service/AccessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers:[AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(public log:AccessControlLog) { }

  ngOnInit() {
  }

  submitForm(myForm){
    console.log(myForm.form)
    this.log.addAccessItem(myForm.form._value.person, myForm.form._value.message)
  }
}

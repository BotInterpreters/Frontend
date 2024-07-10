import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import moment from 'moment-timezone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSearching: boolean = false;
  isLoading: boolean = false;

  isPanelOpened: boolean[] = [];
  initialLanguage = 1;

  userEmailInputFAQ: any;
  userEmailInputHeader: any;

  emailEmpty: boolean = false;
  notEmails: boolean = false;
  userTimeZone: any;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    var timeZone = moment.tz.guess();

    this.checkUserTimeZone(timeZone);
  }

  togglePanel(index: number, isOpened: boolean) {
    this.isPanelOpened[index] = isOpened;
  }

  login() {
    this.router.navigate(['/login']);
  }

  registerFAQ(form: NgForm) {

    if(form.invalid){
      this.setFormControlsTouchedAndDirty(form)
    }

  }

  registerHeader(form: NgForm){

    if(form.invalid){
      this.setFormControlsTouchedAndDirty(form)
    }

  }

  setFormControlsTouchedAndDirty(form: NgForm){

    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsTouched();
      form.controls[key].markAsDirty();
    });
  
  }

  searchMovie() {}

  loadMovies() {}

  checkUserTimeZone(timeZone: any) {
    console.log('User timezone', timeZone);

    switch (timeZone) {
      case 'Asia/Manila':
        this.userTimeZone = 'Philippines';

        break;

      default:
        this.userTimeZone = '';
    }
  }
}

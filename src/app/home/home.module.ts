// src/app/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../shared/material-module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    
    
  ]
})
export class HomeModule {}

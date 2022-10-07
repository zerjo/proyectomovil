import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string []
  clave: string[]
  usu: string;
  pass: string;

  constructor() {
    this.usuario=['admin','usua'];
    this.clave=['123','1234']
   }


  ngOnInit() {
  }
  login(){
    if(this.usu=="usua" && this.pass=="123"){
      console.log('estoy aca')
      window.location.replace("/bienvenidos")
    }

  }

}

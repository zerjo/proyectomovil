import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl:LoadingController) {}
 
  ngOnInit(){
    this.presentLoading();
 }
 async presentLoading (){
  const loading =await this.loadingCtrl.create({
    message:"calmao",
    duration: 2000
  });
  return await loading.present();
 }
}

import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PredefinedColors } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async present(message: string, color: PredefinedColors): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
      buttons: [
        {
          icon: 'close-circle-outline',
          handler: () => { this.dismiss(); }
        }
      ]
    });

    toast.present();

    return toast;
  }

  async dismiss() {
    this.toastController.dismiss();
  }
}

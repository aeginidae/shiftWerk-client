import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-maker-notifications',
  templateUrl: './maker-notifications.component.html',
  styleUrls: ['./maker-notifications.component.scss'],
})
export class MakerNotificationsComponent implements OnInit {

  constructor(
    public toastController: ToastController
  ) { }

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Invitation ${answer}d`,
      duration: 2000,
      color: "primary",
      position: "top"
    });
    toast.present();
  }

  accept(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  decline(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  ngOnInit() {}

}

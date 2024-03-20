import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonImg, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, CommonModule, IonImg, IonInput],
})
export class HomePage {
  
  position = {
    latitude: 0,
    longitude: 0,
  }

  placeholder = '¿Que estas pensando hoy?';
  value = '';

  imageSrc = '';

  constructor() {}

  async takePicture() {
    this.value = '';
    const camera = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      promptLabelHeader: 'Seleccionar una opción',
      promptLabelPicture: 'Tomar una foto',
      promptLabelPhoto: 'Elegir de galería',
    });
    if (!camera) return;
    this.imageSrc = camera.webPath ?? camera.path ?? '';
    console.log(this.imageSrc);

    // this.imageSrc = imageUrl;
  }

  async getCurrentPosition() {
    this.value = '';
    const position = await Geolocation.getCurrentPosition();
    this.position.latitude = position.coords.latitude;
    this.position.longitude = position.coords.longitude;
    this.value = `Mi posicion actual es: (Latitude: ${this.position.latitude} / Longitude: ${this.position.longitude})`;
  }

}

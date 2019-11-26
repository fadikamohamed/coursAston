import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {

  photo = [];
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photo = this.getPhotos();
  }

  getPhotos(){
    return this.photoService.getPhoto();
  }
}

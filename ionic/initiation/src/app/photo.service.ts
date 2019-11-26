import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photo: any[] =
  [
    "https://images-na.ssl-images-amazon.com/images/I/91q3OYqDc3L.jpg",
    "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  ];
  constructor() { }

  getPhoto(){
    return this.photo;
  }
}

import { Component, OnInit } from '@angular/core';
import{SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
  favImage: any;

  constructor(private service:SearchServiceService) { }

  ngOnInit(): void {
    this.favImage = this.service.receiveData()
  }
  downloadFav(i) {
    const imgUrl = this.favImage[i].urls.small
    var a = document.createElement("a"); //Create <a>
    a.href = "data:image/jpeg;base64," + imgUrl; //Image Base64 Goes here
    a.download = "Image.jpeg"; //File name Here
    a.click(); 
  
  }

}

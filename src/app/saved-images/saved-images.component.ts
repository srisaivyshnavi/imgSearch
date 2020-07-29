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

}

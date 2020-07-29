import { Component, OnInit, Inject} from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {

  data:any;
  link:String;
  favImages : any;
  constructor(private service :SearchServiceService,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<AddFavouriteComponent>,@Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
    //this.link = data.pageURL
    console.log(data);
  }
 
  ngOnInit(): void {
  }
  addSelected(){
    this.service.sendData(this.data)
    
  }
  
 
}

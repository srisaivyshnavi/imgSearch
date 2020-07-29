import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {


  private query: string;
  private API_KEY: string = "17689340-f2577d65d9afeacec9bd3dc46";
  private API_URL: string ="https://pixabay.com/api/?key=";
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=10";
  storeArray= [];
  storeImage: any;
  constructor(private http:HttpClient) { }
 
  getSearchResult(data:string){
    return this.http.get(this.URL + data + this.perPage);
  }
  sendData(obj:any){
    this.storeArray.push(obj)
      this.storeImage=this.storeArray;
    }
  
  receiveData():any{
      return this.storeImage;
    }
}

  
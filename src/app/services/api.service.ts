
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { myPosts } from 'src/model/myPosts';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {


  constructor(private http:HttpClient) { }


  baseUrl:string='https://jsonplaceholder.typicode.com/posts';
 

  getAllPosts():Observable<myPosts>{
    return this.http.get(this.baseUrl)
      
  }
}

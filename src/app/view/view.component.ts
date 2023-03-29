import { Component, OnInit } from '@angular/core';
import { myPosts } from 'src/model/myPosts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  constructor(private api:ApiService) {}

  allPosts:myPosts[]=[]

  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts(){
    this.api.getAllPosts().subscribe((data:any)=>{
      console.log(data);
      this.allPosts=data
      
    })
  }

}

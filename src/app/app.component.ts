import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

export class Movies{
  constructor(
  public id : number,
  public globalrank : string,
  public title : string
  ){

  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movies: Movies[] | undefined;
  constructor(
    private httpClient: HttpClient
  ){}

  ngOnInit():void{
    this.getMovies();
  }

  getMovies(){
    this.httpClient.get<any>('http://localhost:3000/movies').subscribe(
      response =>{
        console.log(response);
        this.movies = response;
        
      }
     );
  }
}

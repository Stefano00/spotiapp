import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
 loading: boolean;

  constructor( private spotify: SpotifyService) {
   
   }

  artistas: any[] = [];
  

  buscar(termino: string){
    this.loading=true;
    console.log(termino);
    this.spotify.getArtistas( termino ).subscribe( (data: any) => {
      this.artistas = data;
      this.loading=false;
    });
  }

 

}

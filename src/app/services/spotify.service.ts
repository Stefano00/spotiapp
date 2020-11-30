import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify Service listo')
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBCB6Se0OQl5OyBeCb3XX64kdGAdGrHZm-Ca5YunZuCtrqJnCiKgoLKiNKFJbf7ulpH3FQGvVg20RJQPnd3PGWtcc3VnuaHgtNjMspPcBbuJm5VPOFXRoCfAv6WRffp51hi9vIWB4sONoTMFOGt3_gCwRP7oergmnQ'
    });


    return this.http.get(url, { headers });
  }

  getNewReleases(){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBlGvIHunhfO9JxBY9Dt5zo-RLAeSxo-f7lgmyljFiR0YoMiR6XZKB_g0cfUxFQS43JoJu0jHbSih5iOqe26JRjkG0dmoyDsQJmG7vQgYHovjJtGjXl5a0jd1eauck8Nu_M8lN3_0bUvfIm1BLHv6sPXovYOstaDNk'
    // });

     return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items ));
     }

  getArtistas( termino: string ){
    
     return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string ){
    
    return this.getQuery(`artists/${id}`);
            //  .pipe( map( data => data['artists'].items));
 }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));

  }

}

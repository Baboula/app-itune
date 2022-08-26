import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ItuneService } from '../shared/itune.service';
import { Music } from '../shared/music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  music!: Music;
  constructor(private router: Router, private route: ActivatedRoute, public ituneService: ItuneService) { 
   this.route.params.subscribe((
    params => {
      if(params[`musicId`]){

      //console.log(params[`musicId`]);
       // this.getMusic(params[`musicId`]);
        console.log(params[`musicId`]);
      }
    }
    
   ))
    
  }

  /*getMusic(musicId: string){
    this.ituneService.moreInfos(musicId).pipe(
      map(data => {
          const res: any = data;
          console.log(res);
      })  
  ).subscribe((music: Music) => this.music= music);
  }*/
  ngOnInit(): void {
  }

}

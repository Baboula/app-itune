import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs";
import { APP_CONFIG,AppConfig } from "../app-config/app-config.module";
import { Music } from "./music";

@Injectable()
export class ItuneService{

    public query!: string;
    public music!: Music[];

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig){

    }
     public searchMusic(queryTitle: string){
        this.query = queryTitle;
        this.http.get(`${this.config.apiEndPoint}search?term=${this.query}`).pipe(
            map(data => {
                const res: any = data;
                console.log(res.results);
                return res.results? res.results: [];
            })  
        ).subscribe(music => this.music= music);
     }

    public bookFactory(item: any): Music{
        return new Music(
            item.artistName,
            item.subTitle,
            item.artistViewUrl,
            item.artwork30,
            item.artworkurl60,
            item.artworkUrl100,
            item.trackId
        ) 
            
    }
}
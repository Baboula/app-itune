import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicComponent } from './music/music.component';
import { MusicListComponent } from './music-list/music-list.component';
import { LibraryComponent } from './library/library.component';
import { SearchComponent } from './search/search.component';
import { AppConfigModule } from './app-config/app-config.module';
import { HttpClientModule} from '@angular/common/http'
import { ItuneService } from './shared/itune.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicComponent,
    MusicListComponent,
    LibraryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppConfigModule,
    HttpClientModule
  ],
  providers: [ItuneService],
  bootstrap: [AppComponent]
})
export class AppModule { }

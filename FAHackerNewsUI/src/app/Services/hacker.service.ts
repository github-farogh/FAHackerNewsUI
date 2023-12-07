import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment/environment';
import { HackernewsModel } from 'src/Models/hackernews.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackerService {

  private baseUrl = environment.apiURL;
    constructor(private http: HttpClient) {}

    getHackerNews(
      ): Observable<HackernewsModel[]> {
        return this.http.get<HackernewsModel[]>(this.baseUrl+'/hackernews/get');
      }
}




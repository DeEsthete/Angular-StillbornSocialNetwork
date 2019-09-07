import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../Entities/Dto(Main)/Media';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor() { }

  public getMedias(contentId: number): Observable<Media[]>
  {
    return null;
  }
}

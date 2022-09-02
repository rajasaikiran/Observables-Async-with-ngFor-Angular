import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulkdataService {

  private sampleUrl= 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http : HttpClient) { }

  public getAllData():Observable<any[]>{
    return this.http.get<any[]>(this.sampleUrl);
  }
}

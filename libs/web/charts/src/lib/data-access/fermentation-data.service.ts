import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FermentationDataService {
  private apiUrl = 'https://fermentationdatasample.azurewebsites.net/api/query';
  private cachedData: any[] = [];
  private cachedDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchData(): void {
    this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        map((response) => {
          // Process response data if needed
          return response;
        }),
        catchError((error) => {
          console.error('Error fetching fermentation data:', error);
          return [];
        })
      )
      .subscribe((data) => {
        this.cachedData = data; // Cache the fetched data
        this.cachedDataSubject.next(data);
      });
  }

  getCachedData(): any[] {
    return this.cachedData;
  }

  getCachedDataObservable(): Observable<any[]> {
    return this.cachedDataSubject.asObservable();
  }
}

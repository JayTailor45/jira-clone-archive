import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { GET_ISSUES } from '../graphql/queries/issue';
import { HttpHeaders } from '@angular/common/http';
import { Ticket } from 'src/models/ticket';

interface IssuesResponse {
  issues: Ticket[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  getIssues(): Observable<Ticket[]> {
    return this.apollo
      .watchQuery<IssuesResponse>({
        query: GET_ISSUES,
        context: {
          headers: new HttpHeaders().set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyNWFiZDU1M2FiMjI5YTRhMjcxMTMiLCJlbWFpbCI6InRhaWxvcmo2NEBnbWFpbC5jb20iLCJpYXQiOjE2MTY1MzExMDQsImV4cCI6MTYxNjUzODMwNH0.tqxyiu-h6xvJX6dV9eTvt71TK2UaEkdMV3edvdBqtyI'
          ),
        },
      })
      .valueChanges.pipe(
        map((res) => res.data.issues),
        tap((res) => console.log(res))
      );
  }
}

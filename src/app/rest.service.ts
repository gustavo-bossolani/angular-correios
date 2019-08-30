import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestServise {

    constructor(private http: HttpClient) { }

    getObject(url: any): Observable<any> {
        return this.http.get(url).pipe(map(this.extrairDados));
    }

    getError(url: any) {
        return this.http.get(url).pipe(
            catchError(e => throwError(this.errorHandler(e))
        ));
    }

    errorHandler(error: any) {
        console.log(error);
    }

    private extrairDados(res: Response) {
        let body = res;
        return body || {};
    }
}
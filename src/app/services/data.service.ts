import { BadRequestError } from './../common/bad-request-errort';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {
    constructor(private url, private http: Http) { }

    getAll() {
        return this.http.get(this.url).
            map(response => response.json()).
            catch(this.handleError);
    }

    create(resource) {
        return this.http.post(this.url, resource)
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(resource) {
        return this.http.delete(this.url + '/' + 375)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadRequestError());
        if (error.status === 404)
            return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(error));
    }
}
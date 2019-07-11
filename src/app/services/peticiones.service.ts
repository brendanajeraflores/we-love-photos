import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url: string;

    constructor(private _http:HttpClient){
        this.url = 'http://jsonplaceholder.typicode.com/users';
    }

    getUsuarios(){
        return this._http.get(this.url)
                    .map(res => res);
    }

    getUsuarioIndividual(){
        return this._http.get(this.url +'/1')
                .map(res => res);
    }
}
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url: string;
    public urlAlbums: string;
    public urlAlbum: string;



    constructor(private _http:HttpClient){
        this.url = 'http://jsonplaceholder.typicode.com/users';
        this.urlAlbums = 'http://jsonplaceholder.typicode.com/albums?userId=';
        this.urlAlbum = 'http://jsonplaceholder.typicode.com/albums';
    }

    getUsuarios(){
        return this._http.get(this.url)
                    .map(res => res);
    }

    getUsuarioIndividual(idUsuario){
        return this._http.get(this.url +'/'+idUsuario)
                .map(res => res);
    }

    getAlbumsUsuario(idUsuario){
        return this._http.get(this.urlAlbums+idUsuario)
                .map(res => res);
    }

    getAlbumPhotos(idAlbum){
        return this._http.get(this.urlAlbum+'/'+idAlbum+'/photos')
                .map(res => res);
    }
}
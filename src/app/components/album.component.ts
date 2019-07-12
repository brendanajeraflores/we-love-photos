import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'album',
    templateUrl: '../views/album.component.html',
    providers: [PeticionesService]
})

export class AlbumComponent{
    public usuario;
    public idUsuario;
    public idAlbum;
    public albumPhotos;
    public username;
    public albumsUsuario;
    public nameAlbum;

    constructor(
        private _peticionesService: PeticionesService,
        private _route: ActivatedRoute,
        private _router: Router){
        
    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.idUsuario = params['idUsuario'];
            this.idAlbum = params['idAlbum'];
        })
        this._peticionesService.getUsuarioIndividual(this.idUsuario).subscribe(
            result => {
                this.usuario = result;
                this.username = this.usuario.username
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
        this._peticionesService.getAlbumPhotos(this.idAlbum).subscribe(
            result => {
                this.albumPhotos = result;
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
        this._peticionesService.getAlbumsUsuario(this.idUsuario).subscribe(
            result => {
                this.albumsUsuario = result;
                this.albumsUsuario.forEach((value) => {
                    if (value.id == this.idAlbum) {
                        this.nameAlbum = value.title;
                    }
                });
                
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );

    }
}
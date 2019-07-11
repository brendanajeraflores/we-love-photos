import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'usuario',
    templateUrl: '../views/usuario.component.html',
    providers: [PeticionesService]
})

export class UsuarioComponent{
    public usuario;
    public idUsuario;
    public albumsUsuario;
    public name;
    public username;

    constructor(
        private _peticionesService: PeticionesService,
        private _route: ActivatedRoute,
        private _router: Router){
        
    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.idUsuario = params['id'];
            console.log(params);
        })
        this._peticionesService.getUsuarioIndividual(this.idUsuario).subscribe(
            result => {
                this.usuario = result;
                this.name = this.usuario.name
                this.username = this.usuario.username
                console.log(result);
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
        this._peticionesService.getAlbumsUsuario(this.idUsuario).subscribe(
            result => {
                this.albumsUsuario = result;
                console.log(result);
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );

    }
}

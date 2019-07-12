import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'home',
    templateUrl: '../views/home.component.html',
    providers: [PeticionesService]
})

export class HomeComponent{
    public usuarios;
    searchText;

    constructor(
        private _peticionesService: PeticionesService){
        
    }

    ngOnInit(){
        this._peticionesService.getUsuarios().subscribe(
            result => {
                this.usuarios = result;
                console.log(result);
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
    }

    obtenerUsuarios(){
        alert('obtener usuarios');
    }
}
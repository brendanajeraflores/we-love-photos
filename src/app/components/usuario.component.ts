import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'usuario',
    templateUrl: '../views/usuario.component.html',
    providers: [PeticionesService]
})

export class UsuarioComponent{
    public usuario;

    constructor(
        private _peticionesService: PeticionesService){
        
    }

    ngOnInit(){
        this._peticionesService.getUsuarioIndividual().subscribe(
            result => {
                this.usuario = result;
                console.log(result);
            }, 
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
    }
}

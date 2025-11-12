import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado-service';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
    selector: 'app-perfil-empleado',
    imports: [],
    templateUrl: './perfil-empleado.html',
    styleUrl: './perfil-empleado.css',
})
export class PerfilEmpleado implements OnInit {
    public perfil!: Empleado;

    constructor(private _service: EmpleadoService, private _route: Router) {}
    ngOnInit(): void {
        let token = localStorage.getItem('token');
        if (token === null) {
            this._route.navigate(['/login']);
        } else {
            this._service
                .getPerfil(token)
                .subscribe((response) => (this.perfil = response));
        }
    }
}

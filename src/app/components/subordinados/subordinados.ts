import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado-service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
    selector: 'app-subordinados',
    imports: [],
    templateUrl: './subordinados.html',
    styleUrl: './subordinados.css',
})
export class Subordinados {
    public subordinados!: Array<Empleado>;

    constructor(private _service: EmpleadoService, private _route: Router) {}
    ngOnInit(): void {
        let token = localStorage.getItem('token');
        if (token === null) {
            this._route.navigate(['/login']);
        } else {
            this._service
                .getSubordinados(token)
                .subscribe((response) => (this.subordinados = response));
        }
    }
}

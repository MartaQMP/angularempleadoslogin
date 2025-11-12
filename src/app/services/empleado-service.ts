import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Empleado } from '../models/empleado';
import { Login } from '../models/login';

@Injectable({
    providedIn: 'root',
})
export class EmpleadoService {
    constructor(private _http: HttpClient) {}

    getSubordinados(token: string): Observable<Array<Empleado>> {
        let request = 'api/empleados/subordinados';
        const header = new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        return this._http.get<Array<Empleado>>(environment.urlEmpleados + request, {
            headers: header,
        });
    }

    getPerfil(token: string): Observable<Empleado> {
        let request = 'api/empleados/perfilempleado';
        const header = new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        return this._http.get<Empleado>(environment.urlEmpleados + request, { headers: header });
    }

    crearToken(login: Login): Observable<any> {
        let request = 'auth/login';
        let dataJson = JSON.stringify(login);
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(environment.urlEmpleados + request, dataJson, { headers: header });
    }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado-service';
import { Login } from '../../models/login';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class InicioSesion {
    @ViewChild('username') username!: ElementRef;
    @ViewChild('password') password!: ElementRef;

    constructor(private _service: EmpleadoService, private _route: Router) {}

    hacerLogin(): void {
        let login: Login = {
            userName: this.username.nativeElement.value,
            password: this.password.nativeElement.value,
        };
        this._service.crearToken(login).subscribe((response) => {
            localStorage.clear();
            localStorage.setItem('token', response.response);
            this._route.navigate(['/']);
        });
    }

    cerrarLogin(): void {
        localStorage.clear();
    }
}

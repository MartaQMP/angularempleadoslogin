import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PerfilEmpleado } from './components/perfil-empleado/perfil-empleado';
import { Subordinados } from './components/subordinados/subordinados';
import { InicioSesion } from './components/Inicio-sesion/login';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "login", component: InicioSesion},
    {path: "perfil", component: PerfilEmpleado},
    {path: "subordinados", component: Subordinados},
];

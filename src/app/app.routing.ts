import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";

import { InicioComponent } from "./inicio/inicio.component";
import { ProductosComponent } from "./productos/productos.component";
import { GestionComponent } from "./gestion/gestion.component";
import { LoginComponent } from "./login/login.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const appRoutes : Routes = [
    {path: '', component: InicioComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:categoria', component: ProductosComponent},
    {path: 'gestion', component: GestionComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotfoundComponent}
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
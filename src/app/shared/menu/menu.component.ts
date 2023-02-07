import { Component } from '@angular/core';
import { Menu } from '../Interfaces/menuinterface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
menu:Menu[]=[
  {ruta:'./co/mac' ,texto:'Mac'},
  {ruta:'./co/ipad' ,texto:'iPad'},
  {ruta:'./co/iphone' ,texto:'iPhone'},
  {ruta:'./co/watch' ,texto:'Watch'},
  {ruta:'./co/airpods' ,texto:'AirPods'},
  {ruta:'./co/tvycasa' ,texto:'Tv y Casa'},
  {ruta:'./co/soloenapple' ,texto:'Solo en Apple'},
  {ruta:'./co/soporte' ,texto:'Soporte'},
  {ruta:'./co/donde-comprar', texto:'Donde Comprar'},


 
  


]
registromenu:Menu[]=[
  {ruta:'./auth/login' ,texto:'Login'},
  {ruta:'./auth/register', texto:'Register'},
]
}

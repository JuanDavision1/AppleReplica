import { Component } from '@angular/core';
import { Menu } from '../Interfaces/menuinterface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
Entretenimiento:Menu[]=[
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:' Apple One'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:' Apple TV+'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:' Apple Music'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:' Apple Arcade'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:'Apple Fitness+'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:'  Apple Podcasts'},
  {ruta:'https://www.apple.com/co/apple-one/',texto:' Apple Books'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:' App Store'},
 
]
Acercade:Menu[]=[
  {ruta:'https://www.apple.com/co/newsroom/' ,texto:' Newsroom'},
  {ruta:'https://www.apple.com/co/newsroom/' ,texto:'Directivos de Apple'},
  {ruta:'https://www.apple.com/co/newsroom/' ,texto:'Oportunidades laborales'},
  {ruta:'https://www.apple.com/co/newsroom/' ,texto:'Inversionistas'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:'Ética y cumplimiento de políticas'},
  {ruta:'https://www.apple.com/co/apple-one/' ,texto:'Eventos'},

]
}

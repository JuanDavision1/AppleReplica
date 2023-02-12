import { Injectable } from '@angular/core';
import { boxes } from '../interfaces/apple.interface';

@Injectable({
  providedIn: 'root'
})
export class AppleServiceService {
public FinalBoxes:boxes[]=[
  { id:0,titulo:'MacBook Pro',parrafo:'Con los superpoderes de los chips<br> M2 Pro y M2 Max.',masinfor:'Más informacion >',ruta:'https://www.apple.com/co/iphone-14-pro/',img:'../../../../assets/img/cumpuss.jpg'},
  { id:1,titulo:'Mac mini',parrafo:'Con los superpoderes de los chips<br> M2 Pro y M2 Max.',masinfor:'Más informacion >',ruta:'https://www.apple.com/co/iphone-14-pro/',img:"../../../../assets/img/macmini.jpg"},
  { id:2,titulo:'WATCH ULTRA',parrafo:'A la aventura.',masinfor:'Más informacion >',ruta:'https://www.apple.com/co/iphone-14-pro/',img:"../../../../assets/img/WatchUltra.jpg"},
  {id:3,titulo:'iPad',parrafo:'Inspírate.Exprésate.Diviértete',masinfor:'Más informacion >',ruta:'https://www.apple.com/co/iphone-14-pro/',img:"../../../../assets/img/Tablets.jpg"},
  {id:4,titulo:'iPad Pro',parrafo:'Con los superpoderes del chip.',masinfor:'Más informacion >',ruta:'https://www.apple.com/co/iphone-14-pro/',img:"../../../../assets/img/ipodpro.jpg"},
  {id:5,titulo:'Fitness+',parrafo:'Nuevos entrenamientos de Artista en Detalle con la musica de Beyoncé',masinfor:'Descurbre las novedades >',ruta:'https://www.apple.com/co/iphone-14-pro/',img:"../../../../assets/img/Beyonce.jpg"},
]
  constructor() { }
}

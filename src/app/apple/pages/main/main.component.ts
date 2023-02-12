import { style } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { boxes } from '../../interfaces/apple.interface';
import { AppleServiceService } from '../../Services/apple-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('background') fondo!:ElementRef;
  cajas:boxes[]=[]
  constructor(public appleservice:AppleServiceService,private renderrer2:Renderer2){}
ngOnInit(): void {
  this.cajas = this.appleservice.FinalBoxes;
  
}

cambio(indice:number){
 if(this.cajas[indice].id ==2 || this.cajas[indice].id ==3){
  return 'fondoblanco'
}
if(this.cajas[indice].id ==5){
return 'tamaño';
}
return 'hola'
   }

}
  

  





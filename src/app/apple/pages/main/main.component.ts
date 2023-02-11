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

// cambio(){
//   for (let index = 0; index < this.cajas.length; index++) {
//     if(this.cajas[index].titulo ='iPad'){
//       this.renderrer2.setStyle(this.fondo.nativeElement,'background-color','red')
//     console.log('hhh')
//   }
//   }

}
  

  





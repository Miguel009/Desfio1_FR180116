import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  registro = [];
  contador:number;
  enviar=false;
  constructor() { }
  cli:Clientes;
  clie:Clientes;
  cliente:Clientes;
  ngOnInit(): void {
    this.cliente = new Clientes('', '', '', '', '', 1, 0);
  }
  onSubmit(){
    if(!this.enviar)
    {
    this.clie = this.registro.find(dui=>dui.DUI===this.cliente.DUI);
    if (this.clie == null) {
      this.contador=1;
      this.cliente.Descuento=0;
    } else {
      this.cliente.Descuento=0;
      this.contador=1;
      for (let i = 0; i < this.registro.length; i++) {
              if (this.registro[i].DUI==this.cliente.DUI) {
                this.contador++;
              }
      }
      console.log(this.contador);
    }
    if(this.contador==2){
        this.cliente.Descuento = 5;
        this.cliente.Costo=this.cliente.Costo*0.95;
    }
    else 
    if (this.contador>=4) {
      this.cliente.Descuento = 10;
      this.cliente.Costo= this.cliente.Costo*0.90;
    }
    this.cliente.Costo=Math.round(this.cliente.Costo*100)/100;
    this.enviar=true;
    this.cli= new Clientes(this.cliente.DUI, this.cliente.nombre_cliente, this.cliente.nombre_mascota, this.cliente.tratamiento, this.cliente.medicamento, this.cliente.Costo,this.cliente.Descuento);
    this.registro.push(this.cli);
    }
}
}

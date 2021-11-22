import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeEliminado: string = ''

  borrarHeores(){
    this.heroeEliminado = this.heroes.pop() || '';
    console.log(this.heroeEliminado)
    //this.heroeBorrado = heroeEliminado;
   // return heroeEliminado;
  }
}

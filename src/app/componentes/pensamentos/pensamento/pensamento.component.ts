import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento = {
    conteudo: 'Mais um pensamento para ser pensado',
    autoria: 'Zé Bob',
    modelo: 'modelo3'
  }

}

import { Pensamento } from './../pensamento';
import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Mais um pensamento para ser pensado',
    autoria: 'Zé Bob',
    modelo: 'modelo3'
  }


larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
        return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
    }

    constructor(
      private service:PensamentoService,
      private router:Router,
    ){
    }

    ngOnInit(): void{
    }

    criarPensamento(){
      this.service.criar(this.pensamento).subscribe(()=> {
        this.router.navigate(['/listarPensamento'])
      })

    }

    cancelar(){
      this.router.navigate(['/listarPensamento'])
    }

}

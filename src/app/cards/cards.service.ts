import { Card } from 'src/app/shared/model';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Card, ModelCard, ModelCardSingle } from '../shared/model';
=======
import { Observable, map } from 'rxjs';
import { ModelCard } from '../shared/model';
>>>>>>> 711c471fbefa44845ee03327581b86d15cf87200
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract-service';

@Injectable()
export class CardsService extends AbstractService<ModelCard, number> {
  //injeção de dependência
  constructor(private http: HttpClient) {
    super();
  }

  // Método 'listar' é criado sem parâmetros e retorna um 'Observable' que emite objetos do tipo 'ModelCard'.
  listar(): Observable<ModelCard> {
    // 1. O método 'get' é chamado na instância do serviço HTTP ('http') e recebe como parâmetro a URL da requisição.
    // 2. Uma requisição HTTP do tipo GET é enviada para a URL especificada.
    // 3. O método 'get' retorna um 'Observable<ModelCard>', que representa um fluxo de eventos.
    // 4. Esse fluxo de eventos emite objetos do tipo 'ModelCard' à medida que a resposta HTTP é recebida e transformada.
    //    A transformação envolve converter a resposta JSON da requisição em objetos 'ModelCard'.
    return this.http.get<ModelCard>(this.url);
  }

  // 5. No componente ou contexto de uso, você deve se inscrever (fazer 'subscribe') ao Observable retornado pelo método 'listar'.
  //    Isso permite que você receba os eventos emitidos pelo Observable ao longo do tempo.
  //    Por exemplo:
  //    this.service.listar().subscribe((modelCard: ModelCard) => {
  //      // Neste ponto, você recebe um objeto 'ModelCard' a cada evento emitido pelo Observable.
  //      // Faça algo com o objeto ModelCard recebido aqui.
  //    });

  buscar(id: string): Observable<ModelCard> {
    const httpCall = this.http.get<Card>(`${this.url}/${id}`);
  
    return httpCall.pipe(
      map((card: Card) => {
        const modelCard: ModelCard = {
          cards: [card]
        };
        return modelCard;
      })
    );
  }
<<<<<<< HEAD

  buscarCard(id: string): Observable<ModelCardSingle> {
    console.log(`${this.url}/${id}`);
    return this.http.get<ModelCardSingle>(`${this.url}/${id}`);
  }

=======
  
  
  

    
>>>>>>> 711c471fbefa44845ee03327581b86d15cf87200
  criar(objeto: ModelCard): Observable<ModelCard> {
    // o metodo criar chama o metodo post da instancia http do HttpCliente, nesse metodo post ele usa
    // tipo genericio que e feito com <T> os angulos e um tipo de objeto dentro dos angulos, dessa forma
    // posso usar esse tipo nos argumentos do metodo ou no seu retorno
    return this.http.post<ModelCard>(this.url, objeto);
  }
  atualizar(objeto: ModelCard): Observable<ModelCard> {
    return this.http.post<ModelCard>(this.url, objeto);
  }

  deletar(id: number): void {
    this.http.delete(`${this.url}/${id}`);
  }
}
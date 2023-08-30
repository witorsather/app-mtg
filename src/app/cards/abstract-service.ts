import { Observable } from "rxjs";

//https://www.typescriptlang.org/docs/handbook/2/classes.html
export abstract class AbstractService<T, N> {

    url: string = "https://api.magicthegathering.io/v1/cards";

    abstract listar(): Observable<T>;

    abstract buscar(id: N): Observable<T>;

    abstract criar(objeto: T): Observable<T>;

    abstract atualizar(objeto: T): Observable<T>;

    abstract deletar(id: N): void;



    //C
    //create(objeto); return object;
    //R
    /*
    1. Retorno de 1 objeto
    2. Retorno de uma lista de objetos
    3. Retorno de 1 objeto por identificador
    4. REtorno de 1 objeto por objeto previamente definido
    
      get(): Array<any> | null {
    return new Array();
  }
    */
    //U
    //D
}

export class Car {

  


    //Metodo constructor:
    //metodo que se ejecuta automaticamente 
    //cuando se crea un objeto: new
    //sirve para dar valores iniciales a los atributos de la clase

    constructor(
             private _id:number,
                private _model:string,
                private _releaseDate : Date,
                private _placa : string,
                private _isActivate : boolean,
    ){
    }


    public get id(){
        return this._id
               this._model
               this._releaseDate
               this._placa
               this._isActivate
    }




}
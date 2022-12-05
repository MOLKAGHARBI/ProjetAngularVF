export class Parfum {
idm: any|string;
    push(data: Parfum): void {
      throw new Error('Method not implemented.');
    }
    constructor (

        public id?:number,
        public nom?:string, 
       public photo ?:string ,
       public prix ?: number ,
       public  enstock ?: Boolean ,
       public dats ?: Date ,
       public categorie ?: string ,
       public typeparfum ?: string ,
       public marque ?: string ,
     
       

        )
        {}
}

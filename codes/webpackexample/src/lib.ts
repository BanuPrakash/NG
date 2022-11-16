// High Order Function
export type Product = {
    id:number,
    name:string,
    price:number,
    category:string
}
   // Generics
export function forEach<T>(elems:T[], action: (elem:T) => void) : void {
       let i: number;
       for(i = 0; i < elems.length; i++) {
           action(elems[i]);
       }
   }
   
 export default  function filter<T>(elems:T[], predicate: (elem:T) => boolean) : T[] {
       var res:T[] = [];
           forEach(elems, (e) => {
               if(predicate(e)) {
                   res.push(e);
               }
           });
       return res;
}
   
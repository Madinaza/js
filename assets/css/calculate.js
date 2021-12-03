class Calculate{
   constructor ( number ){
       this.number=number;  
   }
   
   plus =function(value) {
       this.value=value;
       this.number= this.number+value;
       return this.number;

   }
   minus=function (value){
        this.value=value;
        this.number=this.plus;
        return this.number-value;

       }
      
   
   multiply(value){
       this.value=value;
       this.number=this.minus();
       return this.number=this.number* this.value;
   }
   divide(value){
       this.value=value;
       this.number=this.multiply()
       return this.number= this.number/this.value;
   }
   

}
var result = new Calculate(50).plus(6).minus(30);
console.log(result);

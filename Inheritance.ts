export{}
class Person {
  LastName:string     
  constructor(lastName:string) {   
     this.LastName = lastName  
  }   
}   
class Firstname extends Person {   
  Firstname: string  
   constructor(lastName: string, firstName: string) {  
       super(lastName);  
       this.Firstname = firstName;  
   }  
   display():void {  
       console.log("Last Name: " +this.LastName);  
       console.log("First Name: " +this.Firstname);  
   }  
}  
let obj = new Firstname("Ponnusamy", "Vikas" );  
obj.display();
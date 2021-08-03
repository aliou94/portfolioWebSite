//exo on printing odd, even, prime


for(let i=1; i<=20; i++){

    for(let j=i; j<=i ; j++){

        if(i%2===0){

          if(i%j!==0 ) console.log(i,":prime")

          console.log(i,":even")
        } 
        else{

           if(i%j===0 && i%3===0 || i===1 ) {

             console.log(i,":odd")
           }
            else {
             console.log(i,":prime")
           }
           
        }
  
        
    }
    
  
  }
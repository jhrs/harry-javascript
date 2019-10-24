// JavaScript Document

'use strict';

//let name = "Hello Harry from JavaScript!";
//alert(name);

function findPrimes()	// finds prime numbers from a textbox on the web page...
{
    let primeSearch;
    primeSearch = document.getElementById("primesTo").value;	// lift value

    alert("Searching for prime numbers to : " + primeSearch);
    
    let numberToTest = 3;
    let primes = "1, 2";
    
    while(numberToTest <= primeSearch)
    {
        let primeStatus = true;
        for(let i = 2; i < numberToTest; i++)
        {
            if(numberToTest % i == 0)   // not prime!
            {
                primeStatus = false;
                break;
                
            }
            
        }
        
        if(primeStatus == true)
        {
            primes = primes + ", " + numberToTest.toString();
            
        }
        
        numberToTest++;
        
    }
    
    
    alert(primes);
    
}

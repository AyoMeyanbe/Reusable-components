import React from 'react';

const Greet = ({name}) => {
    
const time = new Date();
const hour = time.getHours();
let greetTime;

if (hour<=12) {
    greetTime = "Good morning"
} else if(hour>12 && hour<16) {
    greetTime = "Good afternoon"
} else {
    greetTime = "Good evening"
}

   return( 
   <h1>{greetTime} {name}</h1> 
) 
}

export default Greet;

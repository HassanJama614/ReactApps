

import React from 'react'; 


interface GreetingProps {
  name: string; 
}


const Greeting = ({ name }: GreetingProps): JSX.Element => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
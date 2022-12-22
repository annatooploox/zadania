import { useState } from "react";
import { button } from './app.css';

export default function IndexPage(){
return <CounterButton />;
};


function CounterButton() {
    const[counter,setCounter ] = useState(1);
    const increment = () => setCounter(counter + 1)
    return <button className={button} onClick={increment}>{counter}</button>;
  };

/**
 * 1. Używanie pełnych nazw: Inc -> Incrementing, nr -> number
 * 1.a. items.map((it) => {
 *        return it + 2;
 *      });
 * 1.b. items.map((item) => {            // my recommendation
 *        return item + 2;
 *      });
 * 1.c. items.map((item, i) => {
 *        return item + i;
 *      });
 * 1.d. items.map((item, index) => {     // my recommendation
 *        return item + index;
 *      });
 * 1.e. for (let i = 0; i < items.length; i++)
 * 1.f. for (let index = 0; index < items.length; ++index)   // my recommendation
 * 
 * 2. Unikanie nazw odpowiadających słowom kluczowym lub typom:
 * 2.a. Czyli nie: default, Map, Set, number, string, class, function
 * 2.b. Używamy nazw, które zawierają w sobie sens (istnienia) danej wartości
 *      number -> counter, clickCount
 * 
 * 3. React setState: konwencja jest
 * - const [x, setX] = useState(...);
 * - const [counter, setCounter] = useState(...);
 */

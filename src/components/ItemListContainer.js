import { useState } from "react"
import CounterButton from "./itemCount";
import Toastify from 'toastify-js'



const ListContainer = (props) => {

    const [amount, setAmount] = useState(0);
    const handleBuy = () => {Toastify({
        text: `${amount} unidades añadidas al carrito`,
        duration: 1000,
        close: true,
        gravity: "top", 
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();}
    const handleyAdd = () => {
        if (amount<10) {
            setAmount(amount+1);
        }}
    const handleySubstract = () => {
        if (amount > 0){
            setAmount(amount-1);
        }}
    
    return (
        <>
        <p>{props.greeting}</p>
        <CounterButton 
        buy={handleBuy}
        add={handleyAdd}
        substract={handleySubstract}
        amount={amount}/>
        </>
    );
}

export default ListContainer;
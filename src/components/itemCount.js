import { GrFormAdd } from "react-icons/gr"
import { GrFormSubtract } from "react-icons/gr"


const CounterButton = ({add, substract, buy, amount}) => {
    
    return (
        <div className="counter-container">
        <GrFormSubtract onClick={substract}/>
        {amount}
        <GrFormAdd onClick={add}/>
        <button type="button" className="btn btn-primary btn-lg" onClick={buy}>Agregar al carrito</button>
        </div>
    )

}

export default CounterButton
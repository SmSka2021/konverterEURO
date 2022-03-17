import clas from "./Select.module.css";
import uniqid from 'uniqid'


export const Select = (props) => {
    const { coiunt, selectedCurrency, onChangeCurrency } = props
    return (
        <select value={selectedCurrency} className={clas.select} onChange={onChangeCurrency}>
            {coiunt.map((elem) => (<option key={uniqid({ elem })} value={elem}>{elem}</option>))}

        </select>
    )
}
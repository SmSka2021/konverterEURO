import clas from "./Inpute.module.css";

export const Inpute = (props) => {
    const { amount, onChangeAmount } = props
    return (
        <input type="number" onChange={onChangeAmount} value={amount} className={clas.input} />
    )
}

import clas from "./Block.module.css"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Select } from "./select/Select";
import { Inpute } from './input/Inpute';


export const Block = (props) => {
    const { coiunt, onChangeAmount, amount, selectedCurrency, onChangeCurrency } = props
    return (
        <div className={clas.block}>
            <Inpute amount={amount} onChangeAmount={onChangeAmount} />
            <Select onChangeCurrency={onChangeCurrency} coiunt={coiunt} selectedCurrency={selectedCurrency} />
        </div>
    )
}


<Button type="primary">Button</Button>
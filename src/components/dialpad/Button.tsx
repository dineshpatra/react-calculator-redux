import {keyInput, actionInput} from '../../actions/CalculatorActions';
import { useDispatch } from 'react-redux';

export function NumBtn(props: {symbol: string, actualSymbol?:string}) {
    const dispatch = useDispatch();
    return (
        <div className="btn-container" onClick={() => { dispatch(keyInput(props.actualSymbol ? props.actualSymbol : props.symbol))} }>{ props.symbol }</div>
    );
}

export const ActionBtn = (props: {action: any, symbol: string}) => {
    const dispatch = useDispatch();
    return (
        <div className="btn-container"  onClick={() => { dispatch(actionInput(props.action, props.symbol)) }}>{ props.symbol }</div>
    );
}

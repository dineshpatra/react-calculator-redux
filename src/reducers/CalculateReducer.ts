import {CalculatorActions} from '../utility/CalculatorActions';
import {convertMathTOJS} from '../utility/SymbolConvertion';

export interface CalculatorState {
    typedKeys: Array<string | number>,
    showResult: boolean,
    result: number | string
}
const intialState:CalculatorState = {
    typedKeys  : [],
    showResult : false,
    result     : 0
}

export default (state=intialState, action:{type:CalculatorActions,key?: string}):CalculatorState => {
    switch (action.type) {
        case CalculatorActions.KEY_INPUT:
            if (!action.key) return state;
            return {
                ...state,
                typedKeys  : state.showResult ? [action.key] : [...state.typedKeys, action.key],
                result     : 0,
                showResult : false
            }
        case CalculatorActions.RESET:
            return {
                ...state,
                typedKeys  : [],
                result     : 0,
                showResult : false
            }
        case CalculatorActions.BACK:
            return {
                ...state,
                typedKeys  : [...state.typedKeys.slice(0, state.typedKeys.length-1)],
                result     : 0,
                showResult : false
            }
        case CalculatorActions.EQUAL:
            return {
                ...state,
                result     : convertMathTOJS(state.typedKeys.join('')),
                showResult : true
            }
        default:
            return state;
    }
}
import {CalculatorActions} from '../utility/CalculatorActions';

export const keyInput = (number: string) => {
    return {type: CalculatorActions.KEY_INPUT, key: number};
}

export const actionInput = (action:CalculatorActions, number: string) => {
    return {type: action };
}
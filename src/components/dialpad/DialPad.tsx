import React from 'react';
import {NumBtn, ActionBtn} from './Button';
import {CalculatorActions} from '../../utility/CalculatorActions';
import { Symbols } from '../../utility/SymbolConvertion';

export default class DialPad extends React.Component {
    
    dialButtons: Array<any> = [];

    render() {
        return (
            <div id="dialpad-container">
                <div className="row">
                    <ActionBtn action={CalculatorActions.RESET} symbol={Symbols.RESET.unicode} />
                    <NumBtn symbol="%" />
                    <NumBtn symbol={"x" + Symbols.SQUARE.unicode} actualSymbol={Symbols.SQUARE.unicode}/>
                    <ActionBtn action={CalculatorActions.BACK} symbol={Symbols.BACK.unicode}/>
                </div>
                <div className="row">
                    <NumBtn symbol="9"/>
                    <NumBtn symbol="8"/>
                    <NumBtn symbol="7"/>
                    <NumBtn symbol={Symbols.DIVISION.unicode}/>
                </div>
                <div className="row">
                    <NumBtn symbol="6"/>
                    <NumBtn symbol="5"/>
                    <NumBtn symbol="4"/>
                    <NumBtn symbol={Symbols.MULTIPLICATION.unicode}/>
                </div>
                <div className="row">
                    <NumBtn symbol="3"/>
                    <NumBtn symbol="2"/>
                    <NumBtn symbol="1"/>
                    <NumBtn symbol={Symbols.MINUS.unicode}/>
                </div>
                <div className="row">
                    <NumBtn symbol="0"/>
                    <NumBtn symbol="."/>
                    <NumBtn symbol="+"/>
                    <ActionBtn action={CalculatorActions.EQUAL} symbol={Symbols.EQUAL.unicode}/>
                </div>
            </div>
        );
    }
}
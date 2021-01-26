import React from 'react';
import '../../assets/sass/calculator.scss';
import Result from '../Result/Result';
import DialPad from '../dialpad/DialPad';

export default class CalculatorApp extends React.Component {

    render() {
        return (
            <section id="main-frame">
                <div id="calculator-frame">
                    <Result />
                    <DialPad />
                </div>
            </section>
        )
    }
}
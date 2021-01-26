import '../../assets/sass/result.scss';
import { useSelector } from "react-redux";
import { RootState } from '../../reducers/RootReducer';

export default (prop: any) => {
    const calculator = useSelector((state:RootState) => {
        return state.calculator;
    });
    return (
        <section id="result-box">
            <div id="inputs">
                {calculator.typedKeys.join("")}
            </div>
            <div id="result">
                {calculator.result}
            </div>
        </section>
    );
}
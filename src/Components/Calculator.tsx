import { ButtonInfo, buttons } from "./button-info";

function CalcButton({ id, display }: ButtonInfo) {
    return (
        <div id={id} className="calc-button">
            {display}
        </div>
    );
}


function Calculator() {
    return (
        <div id="calculator">
            <div id="calc-screen">
                <div>
                    past inputs
                </div>
                <div>
                    current input
                </div>
            </div>
            <div id="calc-buttons">
                {buttons.map((el, ind) => {
                    return (
                        <CalcButton id={el.id} display={el.display} order={el.order} />
                    );
                })}
            </div>
        </div>
    );
}

export default Calculator;
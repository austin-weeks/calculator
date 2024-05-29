import { useState } from "react";
import { ButtonInfo, buttons } from "./button-info";

interface CalcButtonProps {
    buttoninfo: ButtonInfo;
    onClick: (value: string) => void;
}
function CalcButton({ buttoninfo, onClick }: CalcButtonProps) {
    return (
        <div id={buttoninfo.id} className="calc-button" onClick={() => onClick(buttoninfo.value)}>
            {buttoninfo.display}
        </div>
    );
}


function Calculator() {
    const startingState =  {
        allInput: "",
    }
    const [state, setState] = useState(startingState);

    function onClick(value: string) {
        switch (value) {
            case "_":
                break;
            case "=":
                break;
            case "-":
                break;
            case "+":
                break;
            case "*":
                break;
            case "/":
                break;
            default:
                break;
        }
    }

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
                {buttons.map(el => {
                    return (
                        <CalcButton buttoninfo={el} onClick={onClick} />
                    );
                })}
            </div>
        </div>
    );
}

export default Calculator;
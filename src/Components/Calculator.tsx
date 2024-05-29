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
    const startingState = {
        allInput: "",
        prevValue: "",
        prevRepeatable: false,
        prevOperand: false
    }
    const [state, setState] = useState(startingState);

    function onClick(value: string) {
        const unrepeatables = ["0", "."];
        const operands = ["-", "+", "*", "/"];
        let repeatable = true;
        let isOperand = operands.some(el => el === value);

        //Conditions we need to check
        //Cannot have two operands in a row
        //Decimal must have a value after
        //
        if (state.prevOperand && isOperand) return;
        switch (value) {
            case "_":
                setState(startingState)
                return;
            case "=":
            case "-":
            case "+":
            case "*":
            case "/":
            case "0":
            case ".":
                if (!state.prevRepeatable && state.prevValue === value) return;
                repeatable = false;
                break;
        }
        setState(prev => {
            return {
                allInput: prev.allInput + value,
                prevValue: value,
                prevRepeatable: repeatable,
                prevOperand: isOperand
            }
        })
    }

    return (
        <div id="calculator">
            <div id="calc-screen">
                <div>{state.allInput}</div>
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
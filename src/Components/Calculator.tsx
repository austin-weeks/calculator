import { useState } from "react";
import { ButtonInfo, ValueType, buttons } from "./button-info";

interface CalcButtonProps {
    buttoninfo: ButtonInfo;
    onClick: (value: string, type: ValueType) => void;
}
function CalcButton({ buttoninfo, onClick }: CalcButtonProps) {
    return (
        <div id={buttoninfo.id} className="calc-button" onClick={() => onClick(buttoninfo.value, buttoninfo.type)}>
            {buttoninfo.display}
        </div>
    );
}


function Calculator() {
    const startingState = {
        allInput: "",
        prevValue: "",
        prevType: ValueType.Null,
        currInput: "0"
    }
    const [state, setState] = useState(startingState);

    function onClick(value: string, type: ValueType) {
        if (state.prevType === ValueType.Compute) setState(startingState);
        if (type === ValueType.Clear) {
            setState(startingState);
            return;
        }
        //Conditions we need to check!!!!
        //Cannot have two operands in a row
        //Decimal must have a value after
        let appendAllInput = !(state.allInput === "" && value === "0");

        const numOrDec = state.prevType === ValueType.Number || state.prevType === ValueType.Decimal;
        let appendCurrInput = (numOrDec && state.currInput !== "0") && (type === ValueType.Number || type === ValueType.Decimal);
        //Decimals must be followed by a number input.
        //Maybe figure out a way to just ignore it then? Might not be necessary...
        if (state.prevType === ValueType.Decimal && type !== ValueType.Number) return;

        switch (type) {
            case ValueType.Operand:
                if (!(state.prevType === ValueType.Number || state.prevType === ValueType.Decimal)) return;
                break;
            case ValueType.Decimal:
                if (state.prevType === ValueType.Decimal) return;
                break;
            case ValueType.Compute:
                if (!numOrDec) return;
                const result = "aswr";
                setState(prev => ({
                    allInput : prev.allInput + "=" + result,
                    prevValue: "",
                    prevType: ValueType.Compute,
                    currInput: result
                }));
                return;
        }
        setState(prev => ({
                allInput: appendAllInput ? prev.allInput + value : "",
                prevValue: value,
                prevType: type,
                currInput: appendCurrInput ? prev.currInput + value : value
            }));
    }

    return (
        <div id="calculator">
            <div id="calc-screen">
                <div>{state.allInput}</div>
                <div>{state.currInput}</div>
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
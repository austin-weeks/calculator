import { useState } from "react";
import { ButtonInfo, ValueType, buttons } from "./button-info";

interface CalcButtonProps {
    buttoninfo: ButtonInfo;
    onClick: (value: string, type: ValueType) => void;
}
function CalcButton({ buttoninfo, onClick }: CalcButtonProps) {
    const {id, value, type, display} = buttoninfo;
    return (
        <div id={id} className="calc-button" onClick={() => onClick(value, type)}>
            {display}
        </div>
    );
}

function calculateResult(input: string): string {
    //Dissecting input string into operand and digit group sections.
    const operands = /[+|\-|/|*]/g;
    const operandMatches = [...input.matchAll(operands)];
    const digits = /[\d.]+/g;
    const digitMatches = [...input.matchAll(digits)];
    interface match {
        value: string;
        index: number;
        isNum: boolean;
        numValue: number;
    }
    let entities: match[] = [];
    operandMatches.forEach(match => {
        entities.push({
            value: match[0],
            index: match.index,
            isNum: false,
            numValue: NaN,
        });
    });
    digitMatches.forEach(match => {
        entities.push({
            value: "",
            index: match.index,
            isNum: true,
            numValue: match[0].includes(".") ? parseFloat(match[0]) : parseInt(match[0])
        });
    });
    entities.sort((a, b) => a.index - b.index);
    //Entities array now contains all our elements sorted in the order they appear!
    //CALCULATE

    //Check for starting with negative number and cleanup
    if (!entities[0].isNum && entities[0].value === "-") {
        entities[1].numValue = 0 - entities[1].numValue;
        entities.shift();
    }

    //First entity is assigned to result.
    let result = entities[0].numValue;
    entities.shift();
    //While entities contains items, loop through and perform operation specified at [0] using result and [1].
    while (entities.length > 0) {
        const value = entities[0].value;
        entities.shift();
        switch (value) {
            case "-":
                result -= entities[0].numValue;
                break;
            case "+":
                result += entities[0].numValue;
                break;
            case "/":
                result /= entities[0].numValue;
                break;
            case "*":
                result *= entities[0].numValue;
                break;
        }
        entities.shift();
    }

    //Return .toFixed() result if float, otherwise return result.
    if (result % 1 !== 0) return result.toFixed(1);
    else return result.toString();
}


function Calculator() {
    const startingState = {
        allInput: "",
        prevType: ValueType.Null,
        currInput: "0"
    }
    const [state, setState] = useState(startingState);

    function onClick(value: string, type: ValueType) {
        //RETURN CONDITIONS
        //If previous input was to compute answer, we will first clear state.
        if (state.prevType === ValueType.Compute) setState(startingState);
        //Decimal point must be followed by a number.
        if (state.prevType === ValueType.Decimal && type !== ValueType.Number) return;
        //If user clicked clear btn, clear state and return.
        if (type === ValueType.Clear) {
            setState(startingState);
            return;
        }

        //CHECKING VARIOUS CONDITIONS

        //Only append input if value is not zero and allInput is not empty
        let appendToAllInput = !(state.allInput === "" && value === "0");
        
        const isPrevNumOrDec = state.prevType === ValueType.Number || state.prevType === ValueType.Decimal;
        //Should we replace the current input or add the value?
        let appendOrReplaceCurrInput = (isPrevNumOrDec && state.currInput !== "0") && (type === ValueType.Number || type === ValueType.Decimal);

        switch (type) {
            case ValueType.Operand:
                if (!isPrevNumOrDec) return;
                break;
            case ValueType.Decimal:
                if (state.prevType === ValueType.Decimal) return;
                break;
            case ValueType.Compute:
                if (!isPrevNumOrDec) return;
                const result = calculateResult(state.allInput);
                setState(prev => ({
                    allInput : prev.allInput + "=" + result,
                    prevType: ValueType.Compute,
                    currInput: result
                }));
                return;
        }
        setState(prev => ({
                allInput: appendToAllInput ? prev.allInput + value : "",
                prevType: type,
                currInput: appendOrReplaceCurrInput ? prev.currInput + value : value,
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
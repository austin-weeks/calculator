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

function calculate(entities: string[]): string {
    console.log(entities);
    return "answer";
}


function Calculator() {
    const startingState = {
        allInput: "",
        prevValue: "",
        prevEntity: "",
        prevType: ValueType.Null,
        currInput: "0",
        entities: [""]
    }
    const [state, setState] = useState(startingState);

    function onClick(value: string, type: ValueType) {
        //If previous input was to compute answer, we will first clear state.
        if (state.prevType === ValueType.Compute) setState(startingState);

        //If user clicked clear btn, clear state and return.
        if (type === ValueType.Clear) {
            setState(startingState);
            return;
        }

        //Checking various conditions.
        //Decimal must have a value after
        let appendAllInput = !(state.allInput === "" && value === "0");

        const numOrDec = state.prevType === ValueType.Number || state.prevType === ValueType.Decimal;
        let appendCurrInput = (numOrDec && state.currInput !== "0") && (type === ValueType.Number || type === ValueType.Decimal);

        let completeEntity = false;
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
                const result = calculate(state.entities);
                setState(prev => ({
                    allInput : prev.allInput + "=" + result,
                    prevValue: "",
                    prevEntity: "",
                    prevType: ValueType.Compute,
                    currInput: result,
                    entities: []
                }));
                return;
        }
        setState(prev => ({
                allInput: appendAllInput ? prev.allInput + value : "",
                prevValue: value,
                prevType: type,
                prevEntity: completeEntity ? "" : prev.prevEntity,
                currInput: appendCurrInput ? prev.currInput + value : value,
                entities: completeEntity ? [...prev.entities, prev.prevEntity] : prev.entities
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
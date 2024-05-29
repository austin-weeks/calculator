import { Backspace, Divide, Dot, Equals, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Plus, X } from "@phosphor-icons/react";

export interface ButtonInfo {
    id: string;
    value: string;
    type: ValueType;
    display: any;
    order: number;
}

export enum ValueType {
    Operand,
    Number,
    Decimal,
    Clear,
    Compute,
    Null
}

export const buttons: ButtonInfo[] = [
    {
        id: "equals",
        value: "=",
        type: ValueType.Compute,
        display: <Equals weight="bold" />,
        order: 35
    },
    {
        id: "zero",
        value: "0",
        type: ValueType.Number,
        display: <NumberZero weight="bold" />,
        order: 30
    },
    {
        id: "one",
        value: "1",
        type: ValueType.Number,
        display: <NumberOne weight="bold" />,
        order: 19
    },
    {
        id: "two",
        value: "2",
        type: ValueType.Number,
        display: <NumberTwo weight = "bold" />,
        order: 20
    },
    {
        id: "three",
        value: "3",
        type: ValueType.Number,
        display: <NumberThree weight="bold" />,
        order: 21
    },
    {
        id: "four",
        value: "4",
        type: ValueType.Number,
        display: <NumberFour weight="bold" />,
        order: 15
    },
    {
        id: "five",
        value: "5",
        type: ValueType.Number,
        display: <NumberFive weight="bold" />,
        order: 16
    },
    {
        id: "six",
        value: "6",
        type: ValueType.Number,
        display: <NumberSix weight="bold" />,
        order: 17
    },
    {
        id: "seven",
        value: "7",
        type: ValueType.Number,
        display: <NumberSeven weight="bold" />,
        order: 11
    },
    {
        id: "eight",
        value: "8",
        type: ValueType.Number,
        display: <NumberEight weight="bold" />,
        order: 12
    },
    {
        id: "nine",
        value: "9",
        type: ValueType.Number,
        display: <NumberNine weight="bold" />,
        order: 13
    },
    {
        id: "add",
        value: "+",
        type: ValueType.Operand,
        display: <Plus weight="bold" />,
        order: 32
    },
    {
        id: "subtract",
        value: "-",
        type: ValueType.Operand,
        display: <Minus weight="bold" />,
        order: 22
    },
    {
        id: "multiply",
        value: "*",
        type: ValueType.Operand,
        display: <X weight="bold" />,
        order: 18
    },
    {
        id: "divide",
        value: "/",
        type: ValueType.Operand,
        display: <Divide weight="bold" />,
        order: 14
    },
    {
        id: "decimal",
        value: ".",
        type: ValueType.Decimal,
        display: <Dot weight="bold" />,
        order: 31
    },
    {
        id: "clear",
        value: "",
        type: ValueType.Clear,
        display: <Backspace weight="bold" />,
        order: 1
    }
].sort((a, b) => a.order - b.order);
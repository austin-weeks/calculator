import { Backspace, Divide, Dot, Equals, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Plus, X } from "@phosphor-icons/react";

export interface ButtonInfo {
    id: string;
    value: string;
    display: any;
    order: number;
}

export const buttons: ButtonInfo[] = [
    {
        id: "equals",
        value: "=",
        display: <Equals weight="bold" />,
        order: 35
    },
    {
        id: "zero",
        value: "0",
        display: <NumberZero weight="bold" />,
        order: 30
    },
    {
        id: "one",
        value: "1",
        display: <NumberOne weight="bold" />,
        order: 19
    },
    {
        id: "two",
        value: "2",
        display: <NumberTwo weight = "bold" />,
        order: 20
    },
    {
        id: "three",
        value: "3",
        display: <NumberThree weight="bold" />,
        order: 21
    },
    {
        id: "four",
        value: "4",
        display: <NumberFour weight="bold" />,
        order: 15
    },
    {
        id: "five",
        value: "5",
        display: <NumberFive weight="bold" />,
        order: 16
    },
    {
        id: "six",
        value: "6",
        display: <NumberSix weight="bold" />,
        order: 17
    },
    {
        id: "seven",
        value: "7",
        display: <NumberSeven weight="bold" />,
        order: 11
    },
    {
        id: "eight",
        value: "8",
        display: <NumberEight weight="bold" />,
        order: 12
    },
    {
        id: "nine",
        value: "9",
        display: <NumberNine weight="bold" />,
        order: 13
    },
    {
        id: "add",
        value: "+",
        display: <Plus weight="bold" />,
        order: 32
    },
    {
        id: "subtract",
        value: "-",
        display: <Minus weight="bold" />,
        order: 22
    },
    {
        id: "multiply",
        value: "*",
        display: <X weight="bold" />,
        order: 18
    },
    {
        id: "divide",
        value: "/",
        display: <Divide weight="bold" />,
        order: 14
    },
    {
        id: "decimal",
        value: ".",
        display: <Dot weight="bold" />,
        order: 31
    },
    {
        id: "clear",
        value: "_",
        display: <Backspace weight="bold" />,
        order: 1
    }
].sort((a, b) => a.order - b.order);
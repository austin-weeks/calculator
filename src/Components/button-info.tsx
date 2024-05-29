import { Backspace, Divide, Dot, Equals, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Plus, X } from "@phosphor-icons/react";

export interface ButtonInfo {
    id: string;
    order: number;
    display: any;
    func?: () => void;
}

export const buttons: ButtonInfo[] = [
    {
        id: "equals",
        display: <Equals weight="bold" />,
        order: 35
    },
    {
        id: "zero",
        display: <NumberZero weight="bold" />,
        order: 30
    },
    {
        id: "one",
        display: <NumberOne weight="bold" />,
        order: 19
    },
    {
        id: "two",
        display: <NumberTwo weight = "bold" />,
        order: 20
    },
    {
        id: "three",
        display: <NumberThree weight="bold" />,
        order: 21
    },
    {
        id: "four",
        display: <NumberFour weight="bold" />,
        order: 15
    },
    {
        id: "five",
        display: <NumberFive weight="bold" />,
        order: 16
    },
    {
        id: "six",
        display: <NumberSix weight="bold" />,
        order: 17
    },
    {
        id: "seven",
        display: <NumberSeven weight="bold" />,
        order: 11
    },
    {
        id: "eight",
        display: <NumberEight weight="bold" />,
        order: 12
    },
    {
        id: "nine",
        display: <NumberNine weight="bold" />,
        order: 13
    },
    {
        id: "add",
        display: <Plus weight="bold" />,
        order: 32
    },
    {
        id: "subtract",
        display: <Minus weight="bold" />,
        order: 22
    },
    {
        id: "multiply",
        display: <X weight="bold" />,
        order: 18
    },
    {
        id: "divide",
        display: <Divide weight="bold" />,
        order: 14
    },
    {
        id: "decimal",
        display: <Dot weight="bold" />,
        order: 31
    },
    {
        id: "clear",
        display: <Backspace weight="bold" />,
        order: 1
    }
].sort((a, b) => a.order - b.order);
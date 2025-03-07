import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftdie, setleftdie] = useState<number>(1);
    const [rightdie, setrightdie] = useState<number>(6);

    function rollleftdie(): void {
        setleftdie(d6());
    }
    function rollrightdie(): void {
        setrightdie(d6());
    }
    const showMessageWin = leftdie === rightdie && leftdie != 1;
    const showMessageLoss = leftdie === rightdie && leftdie === 1;
    return (
        <div>
            <span style={{ paddingRight: "40px" }} data-testid="left-die">
                {leftdie}
            </span>
            <span style={{ paddingLeft: "40px" }} data-testid="right-die">
                {rightdie}
            </span>
            <br></br>
            <Button onClick={rollleftdie}>Roll Left</Button>
            <Button onClick={rollrightdie}>Roll Right</Button>
            {showMessageWin && <p>You Win</p>}
            {showMessageLoss && <p>You Lose</p>}
        </div>
    );
}

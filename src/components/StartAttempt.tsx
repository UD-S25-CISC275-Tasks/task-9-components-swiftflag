import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [startState, setStartState] = useState<boolean>(true);
    const [stopState, setStopState] = useState<boolean>(false);
    const [mulliganState, setMulliganState] = useState<boolean>(true);

    function startQuiz(): void {
        setStartState(false);
        setMulliganState(false);
        setStopState(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setStopState(false);
        if (attempts > 0) setStartState(true);
        setMulliganState(true);
    }
    function attemptIncr(): void {
        if (attempts < 1) {
            setStartState(true);
        }
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button disabled={!startState} onClick={startQuiz}>
                Start Quiz
            </Button>
            <Button disabled={!stopState} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button disabled={!mulliganState} onClick={attemptIncr}>
                Mulligan
            </Button>
            <br></br>
            <p>{attempts}</p>
        </div>
    );
}

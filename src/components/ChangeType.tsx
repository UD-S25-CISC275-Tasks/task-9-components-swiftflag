import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const [text, setText] = useState<string>("Short Answer");

    function typeChange(): void {
        if (type === "multiple_choice_question") {
            setType("short_answer_question");
            setText("Short Answer");
        } else {
            setType("multiple_choice_question");
            setText("Multiple Choice");
        }
    }
    return (
        <div>
            <Button onClick={typeChange}>Change Type</Button>
            <p>{text}</p>
        </div>
    );
}

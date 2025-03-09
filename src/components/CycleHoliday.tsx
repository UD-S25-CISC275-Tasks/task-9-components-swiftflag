import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    function rotateAlph(): void {
        if (holiday === "🎄") {
            setHoliday("🐰");
        } else if (holiday === "🐰") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎉");
        } else if (holiday === "🎉") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🎄");
        }
    }
    function rotateYear(): void {
        if (holiday === "🎉") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🐰");
        } else if (holiday === "🐰") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🎉");
        }
    }
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <br></br>
            <Button onClick={rotateAlph}>Advance by Alphabet</Button>
            <Button onClick={rotateYear}>Advance by Year</Button>
        </div>
    );
}

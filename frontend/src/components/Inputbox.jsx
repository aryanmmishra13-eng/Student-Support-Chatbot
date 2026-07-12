import { useState } from "react";

function InputBox({ onSend }) {

    const [input, setInput] = useState("");

    const handleSend = () => {

        if (!input.trim()) return;

        onSend(input);

        setInput("");

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            handleSend();
        }

    };

    return (

        <div className="input-box">

            <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleSend}>
                ➤
            </button>

        </div>

    );

}

export default InputBox;
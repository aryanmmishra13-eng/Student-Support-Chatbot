function ChatWindow({ messages }) {

    return (

        <div className="chat-window">

            {
                messages.map((msg, index) => (

                    <div
                        key={index}
                        className={
                            msg.sender === "user"
                                ? "user-message"
                                : "bot-message"
                        }
                    >

                        <strong>
                            {msg.sender === "user" ? "👤 You" : "🤖 Student AI"}
                        </strong>

                        <p>{msg.text}</p>

                    </div>

                ))
            }

        </div>

    );

}

export default ChatWindow;
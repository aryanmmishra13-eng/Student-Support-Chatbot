from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import get_response

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Student Support Chatbot API is Running!"

@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    user_message = data.get("message", "")

    bot_reply = get_response(user_message)

    return jsonify({
        "response": bot_reply
    })

if __name__ == "__main__":
   import os

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=False
    )  
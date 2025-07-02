import React, { useState } from "react";
import axios from "axios";

const ChatGPT: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [tweetLoading, setTweetLoading] = useState(false);
  const [tweetMessage, setTweetMessage] = useState("");

  const handleSend = async () => {
    const prompt =
      userInput +
      " Generate a viral tweet to promote our meme coin. Keep it short and precise I want to post on X.";

    setLoading(true);
    setResponse("");
    setTweetMessage("");

    try {
      const result = await axios.post("http://localhost:3001/chat", {
        prompt,
      });

      setResponse(result.data.reply);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTweet = async () => {
    if (!response.trim()) return;

    setTweetLoading(true);
    setTweetMessage("");

    try {
      const res = await fetch("http://localhost:3001/tweet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: response }),
      });

      const data = await res.json();

      if (res.ok) {
        setTweetMessage("✅ Tweet posted successfully!");
        setUserInput("");
      } else {
        setTweetMessage(`❌ Error: ${data.error || "Failed to tweet"}`);
      }
    } catch (err) {
      setTweetMessage("❌ Network error");
    } finally {
      setTweetLoading(false);
    }
  };

  return (
    <section>
      <div className="w-[550px] max-md:w-[350px] mx-auto mt-[150px] flex rounded-full shadow overflow-hidden">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-grow px-4 py-2 text-black outline-none"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-violet-700 hover:bg-gray-700 text-white px-4 py-2 text-[16px] disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {response && (
        <div
          className={`mt-8 p-4 rounded shadow transition-opacity duration-1000 ${
            response ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className=" bg-gray-100 py-3 px-5 max-w-[550px] max-md:max-w-[350px] relative mx-auto rounded">
            <strong className="text-black">Generated Tweet:</strong>
            <p className="text-black mt-2">{response}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleTweet}
              disabled={tweetLoading}
              className="mt-4 bg-violet-700 hover:bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {tweetLoading ? "Posting..." : "Post to Twitter"}
            </button>
          </div>
        </div>
      )}

      {tweetMessage && (
        <p className="mt-3 text-sm text-white flex justify-center">
          {tweetMessage}
        </p>
      )}
    </section>
  );
};

export default ChatGPT;

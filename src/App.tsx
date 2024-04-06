import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Reboot } from "./img/Reboot";
import { Neutral } from "./img/Neutral";
import { Negative } from "./img/Negative";
import { Positive } from "./img/Positive";

function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const getSentiment = async () => {
    try {
      const response = await axios.post(
        "http://158.160.161.155:8080/predictions/sentiment",
        { text }
      );
      setSentiment(response.data.data);
    } catch (error) {
      setSentiment(null);
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div className="container">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст..."
      />
      <button disabled={text.length === 0} onClick={getSentiment}>
        Определить эмоцию
      </button>
      {sentiment !== null && (
        <div className="smail-container">
          <div className="smail">
            {sentiment === 0 && <Neutral />}
            {sentiment === 1 && <Negative />}
            {sentiment === 2 && <Positive />}
          </div>
          <a onClick={getSentiment} className="reboot">
            Начать заново <Reboot />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
